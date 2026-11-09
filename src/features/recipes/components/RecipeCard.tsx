"use client";

import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { useFavorites } from "@/features/favorites/FavoritesProvider";
import type { Recipe } from "@/features/recipes/data/recipes";

export default function RecipeCard({ recipe, compact = false }: { recipe: Recipe; compact?: boolean }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const saved = isFavorite(recipe.slug);

  return (
    <article className={`recipe-card${compact ? " recipe-card-compact" : ""}`}>
      <div className="recipe-card-media">
        <Link href={`/recipes/${recipe.slug}`} aria-label={`View ${recipe.title}`}>
          <Image src={recipe.image} alt={recipe.title} fill sizes={compact ? "(max-width: 640px) 80vw, 280px" : "(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"} className="recipe-card-image" />
        </Link>
        <button className={`favorite-button${saved ? " is-saved" : ""}`} type="button" onClick={() => toggleFavorite(recipe.slug)} aria-label={saved ? `Remove ${recipe.title} from saved recipes` : `Save ${recipe.title}`} aria-pressed={saved}>
          <Icon name="heart" size={18} />
        </button>
        <span className="recipe-category-badge">{recipe.category}</span>
      </div>
      <div className="recipe-card-content">
        <Link href={`/recipes/${recipe.slug}`} className="recipe-card-title">{recipe.title}</Link>
        <p className="recipe-card-description">{recipe.description}</p>
        <div className="recipe-card-meta">
          <span><Icon name="clock" size={15} /> {recipe.time} min</span>
          <span><Icon name="utensils" size={15} /> {recipe.servings} servings</span>
          <span><Icon name="sparkles" size={15} /> {recipe.difficulty}</span>
        </div>
      </div>
    </article>
  );
}
