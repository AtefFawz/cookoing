"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Icon from "@/components/ui/Icon";
import { useTheme } from "@/components/layout/ThemeProvider";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Recipes", href: "/recipes" },
  { label: "Our story", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link className="brand" href="/" aria-label="Cookoing home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark"><Icon name="utensils" size={19} /></span>
          <span>cookoing<span className="brand-period">.</span></span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return <Link className={`nav-link${active ? " is-active" : ""}`} href={item.href} key={item.href}>{item.label}</Link>;
          })}
        </nav>

        <div className="nav-actions">
          <button className="icon-button theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`} title="Switch theme">
            <Icon name={theme === "light" ? "moon" : "sun"} size={19} />
          </button>
          <Link className="saved-link" href="/recipes?favorites=1" aria-label="View saved recipes">
            <Icon name="heart" size={18} /> <span>Saved</span>
          </Link>
          <button className="icon-button menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation" : "Open navigation"}>
            <Icon name={menuOpen ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return <Link className={`mobile-nav-link${active ? " is-active" : ""}`} href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>{item.label}<Icon name="arrow-up-right" size={17} /></Link>;
          })}
          <div className="mobile-nav-note">Good food. Good mood. Always.</div>
        </nav>
      )}
    </header>
  );
}
