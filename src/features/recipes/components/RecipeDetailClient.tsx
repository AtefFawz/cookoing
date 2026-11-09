"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import { useFavorites } from "@/features/favorites/FavoritesProvider";
import type { Recipe } from "@/features/recipes/data/recipes";

function formatQuantity(quantity: number) {
  const value = Math.round(quantity * 100) / 100;
  return value.toLocaleString("en-US", { maximumFractionDigits: 2 });
}

export default function RecipeDetailClient({ recipe }: { recipe: Recipe }) {
  const [servings, setServings] = useState(recipe.servings);
  const [checkedIngredients, setCheckedIngredients] = useState<number[]>([]);
  const [notice, setNotice] = useState("");
  const { isFavorite, toggleFavorite } = useFavorites();
  const saved = isFavorite(recipe.slug);

  const toggleIngredient = (index: number) => {
    setCheckedIngredients((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index]);
  };

  const handleShare = async () => {
    const shareData = { title: recipe.title, text: recipe.description, url: window.location.href };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        setNotice("Recipe link copied to clipboard.");
      } else {
        setNotice("Copy the page address from your browser to share this recipe.");
      }
    } catch (error) {
      if (error instanceof Error && error.name !== "AbortError") setNotice("We couldn’t share this recipe right now.");
    }
  };

  return (
    <>
      <div className="recipe-action-row">
        <button type="button" className={`button button-outline${saved ? " is-saved-action" : ""}`} onClick={() => toggleFavorite(recipe.slug)} aria-pressed={saved}>
          <Icon name="heart" size={17} /> {saved ? "Saved" : "Save recipe"}
        </button>
        <button type="button" className="button button-outline" onClick={() => window.print()}><Icon name="printer" size={17} /> Print</button>
        <button type="button" className="button button-outline" onClick={handleShare}><Icon name="share" size={17} /> Share</button>
      </div>
      {notice && <p className="inline-notice" role="status">{notice}</p>}

      <div className="recipe-detail-layout">
        <section className="ingredients-panel">
          <div className="panel-heading">
            <div>
              <span className="eyebrow">WHAT YOU’LL NEED</span>
              <h2>Ingredients</h2>
              <p>Tick each item as you get it ready.</p>
            </div>
            <div className="servings-control" aria-label="Adjust servings">
              <span>Servings</span>
              <div>
                <button type="button" onClick={() => setServings((current) => Math.max(1, current - 1))} disabled={servings <= 1} aria-label="Decrease servings">−</button>
                <strong>{servings}</strong>
                <button type="button" onClick={() => setServings((current) => Math.min(12, current + 1))} disabled={servings >= 12} aria-label="Increase servings">+</button>
              </div>
            </div>
          </div>
          <div
            className="ingredient-progress"
            role="progressbar"
            aria-label="Ingredients prepared"
            aria-valuemin={0}
            aria-valuemax={recipe.ingredients.length}
            aria-valuenow={checkedIngredients.length}
          >
            <span style={{ width: `${(checkedIngredients.length / recipe.ingredients.length) * 100}%` }} />
          </div>
          <p className="ingredient-progress-label">{checkedIngredients.length} of {recipe.ingredients.length} ingredients ready</p>
          <ul className="ingredient-list">
            {recipe.ingredients.map((ingredient, index) => {
              const checked = checkedIngredients.includes(index);
              const scaled = ingredient.quantity === null ? "" : `${formatQuantity(ingredient.quantity * servings / recipe.servings)} ${ingredient.unit}`.trim();
              return (
                <li key={`${ingredient.name}-${index}`} className={checked ? "is-checked" : ""}>
                  <label>
                    <input type="checkbox" checked={checked} onChange={() => toggleIngredient(index)} />
                    <span className="ingredient-check"><Icon name="check" size={13} /></span>
                    <span className="ingredient-copy">{scaled && <strong>{scaled}</strong>} {ingredient.name}</span>
                  </label>
                </li>
              );
            })}
          </ul>
          <button type="button" className="text-link ingredient-reset" onClick={() => setCheckedIngredients([])}>Reset checklist</button>
        </section>

        <aside className="recipe-aside">
          <div className="recipe-aside-card">
            <span className="eyebrow">A FEW GOOD TIPS</span>
            <h3>Before you start</h3>
            <ul>{recipe.tips.map((tip) => <li key={tip}><span className="tip-dot" />{tip}</li>)}</ul>
          </div>
          <div className="make-it-yours-card">
            <span className="eyebrow">MAKE IT YOURS</span>
            <h3>A recipe is a starting point.</h3>
            <p>Change the serving size to update the ingredient list, tick items off as you prep and adjust the seasoning to suit your taste.</p>
            <div className="cook-note"><Icon name="sparkles" size={17} /><span>Good cooking leaves room for a little improvisation.</span></div>
          </div>
        </aside>
      </div>

      <section className="method-section">
        <div className="method-heading">
          <span className="eyebrow">LET’S MAKE IT</span>
          <h2>Step by step</h2>
          <p>Take your time, taste as you go and make it your own.</p>
        </div>
        <ol className="method-list">
          {recipe.instructions.map((step, index) => (
            <li key={step.title}>
              <span className="method-number">{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{step.title}</h3><p>{step.body}</p></div>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
