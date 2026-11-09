"use client";

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from "react";

interface FavoritesContextValue {
  favoriteIds: string[];
  isFavorite: (slug: string) => boolean;
  toggleFavorite: (slug: string) => void;
}

const STORAGE_KEY = "cookoing:favorites:v1";
const CHANGE_EVENT = "cookoing:favorites-change";
const EMPTY_FAVORITES: string[] = [];
const FavoritesContext = createContext<FavoritesContextValue | null>(null);
let cachedFavorites: string[] | null = null;

function getClientSnapshot(): string[] {
  if (typeof window === "undefined") return EMPTY_FAVORITES;
  if (cachedFavorites) return cachedFavorites;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const parsed: unknown = stored ? JSON.parse(stored) : [];
    cachedFavorites = Array.isArray(parsed) && parsed.every((item) => typeof item === "string") ? parsed : [];
  } catch {
    cachedFavorites = [];
  }

  return cachedFavorites;
}

function getServerSnapshot() {
  return EMPTY_FAVORITES;
}

function subscribe(listener: () => void) {
  const onStorage = () => {
    cachedFavorites = null;
    listener();
  };

  window.addEventListener(CHANGE_EVENT, listener);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(CHANGE_EVENT, listener);
    window.removeEventListener("storage", onStorage);
  };
}

function updateFavorites(slug: string) {
  const current = getClientSnapshot();
  const next = current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug];
  cachedFavorites = next;

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // The in-memory list remains usable when browser storage is unavailable.
  }

  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const favoriteIds = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  const toggleFavorite = useCallback((slug: string) => updateFavorites(slug), []);
  const isFavorite = useCallback((slug: string) => favoriteIds.includes(slug), [favoriteIds]);
  const value = useMemo(() => ({ favoriteIds, isFavorite, toggleFavorite }), [favoriteIds, isFavorite, toggleFavorite]);

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error("useFavorites must be used inside FavoritesProvider");
  return context;
}
