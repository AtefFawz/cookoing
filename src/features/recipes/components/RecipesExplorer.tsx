"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import RecipeCard from "@/features/recipes/components/RecipeCard";
import { categories, recipes, type RecipeCategory } from "@/features/recipes/data/recipes";
import { useFavorites } from "@/features/favorites/FavoritesProvider";

const sortOptions = [
  { value: "featured", label: "Featured first" },
  { value: "quick", label: "Quickest first" },
  { value: "alphabetical", label: "A to Z" },
];

export default function RecipesExplorer({ initialQuery = "", initialCategory = "", showFavoritesInitially = false }: { initialQuery?: string; initialCategory?: string; showFavoritesInitially?: boolean }) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState<RecipeCategory | "All">((categories.includes(initialCategory as RecipeCategory) ? initialCategory : "All") as RecipeCategory | "All");
  const [sortBy, setSortBy] = useState("featured");
  const [showFavorites, setShowFavorites] = useState(showFavoritesInitially);
  const { favoriteIds } = useFavorites();

  const filteredRecipes = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const result = recipes.filter((recipe) => {
      const matchesQuery = !normalizedQuery || `${recipe.title} ${recipe.description} ${recipe.category} ${recipe.ingredients.map((ingredient) => ingredient.name).join(" ")}`.toLowerCase().includes(normalizedQuery);
      const matchesCategory = category === "All" || recipe.category === category;
      const matchesFavorites = !showFavorites || favoriteIds.includes(recipe.slug);
      return matchesQuery && matchesCategory && matchesFavorites;
    });

    return result.sort((a, b) => {
      if (sortBy === "quick") return a.time - b.time;
      if (sortBy === "alphabetical") return a.title.localeCompare(b.title);
      return Number(Boolean(b.featured)) - Number(Boolean(a.featured)) || a.title.localeCompare(b.title);
    });
  }, [category, favoriteIds, query, showFavorites, sortBy]);

  const clearFilters = () => {
    setQuery("");
    setCategory("All");
    setShowFavorites(false);
    setSortBy("featured");
  };

  return (
    <>
      <section className="recipes-toolbar" aria-label="Recipe filters">
        <div className="search-field">
          <Icon name="search" size={19} />
          <label className="sr-only" htmlFor="recipe-search">Search recipes and ingredients</label>
          <input id="recipe-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search recipes, ingredients..." />
          {query && <button type="button" className="search-clear" onClick={() => setQuery("")} aria-label="Clear search"><Icon name="close" size={16} /></button>}
        </div>
        <label className="sort-select-wrap">
          <span className="sr-only">Sort recipes</span>
          <select value={sortBy} onChange={(event) => setSortBy(event.target.value)} aria-label="Sort recipes">
            {sortOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
          </select>
          <Icon name="chevron-down" size={16} />
        </label>
      </section>

      <div className="filter-row">
        <div className="category-filters" aria-label="Filter by category">
          <button className={`filter-chip${category === "All" ? " is-selected" : ""}`} type="button" onClick={() => setCategory("All")} aria-pressed={category === "All"}>All recipes</button>
          {categories.map((item) => <button className={`filter-chip${category === item ? " is-selected" : ""}`} type="button" onClick={() => setCategory(item)} key={item} aria-pressed={category === item}>{item}</button>)}
        </div>
        <button type="button" className={`favorites-filter${showFavorites ? " is-selected" : ""}`} onClick={() => setShowFavorites((value) => !value)} aria-pressed={showFavorites}>
          <Icon name="heart" size={16} /> Saved only <span>{favoriteIds.length}</span>
        </button>
      </div>

      <div className="results-line">
        <p><strong>{filteredRecipes.length}</strong> {filteredRecipes.length === 1 ? "recipe" : "recipes"} to explore</p>
        {(query || category !== "All" || showFavorites) && <button type="button" className="text-link muted-link" onClick={clearFilters}>Clear filters <Icon name="close" size={14} /></button>}
      </div>

      {filteredRecipes.length > 0 ? (
        <div className="recipe-grid">
          {filteredRecipes.map((recipe) => <RecipeCard key={recipe.slug} recipe={recipe} />)}
        </div>
      ) : (
        <div className="empty-state">
          <span className="empty-state-icon"><Icon name="search" size={26} /></span>
          <h3>{showFavorites && favoriteIds.length === 0 ? "Your saved list is waiting" : "Nothing on the menu just yet"}</h3>
          <p>{showFavorites && favoriteIds.length === 0 ? "Tap the heart on a recipe to keep it close for later." : "Try a different search or clear a filter to see more recipes."}</p>
          {showFavorites && favoriteIds.length === 0 ? <Link href="/recipes" className="button button-dark">Explore recipes <Icon name="arrow-right" size={16} /></Link> : <button type="button" className="button button-dark" onClick={clearFilters}>Reset filters <Icon name="arrow-right" size={16} /></button>}
        </div>
      )}
    </>
  );
}
