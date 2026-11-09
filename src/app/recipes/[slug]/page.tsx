import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/ui/Icon";
import RecipeDetailClient from "@/features/recipes/components/RecipeDetailClient";
import RecipeCard from "@/features/recipes/components/RecipeCard";
import { getRecipe, recipes } from "@/features/recipes/data/recipes";

export function generateStaticParams() {
  return recipes.map((recipe) => ({ slug: recipe.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipe(slug);
  if (!recipe) return { title: "Recipe not found" };
  return {
    title: recipe.title,
    description: recipe.description,
    openGraph: { title: recipe.title, description: recipe.description, images: [recipe.image] },
  };
}

export default async function RecipeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipe = getRecipe(slug);
  if (!recipe) notFound();
  const moreRecipes = recipes.filter((item) => item.slug !== recipe.slug && item.category === recipe.category).slice(0, 3);
  const recommendations = moreRecipes.length ? moreRecipes : recipes.filter((item) => item.slug !== recipe.slug).slice(0, 3);

  return (
    <div className="container page-shell recipe-detail-page">
      <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/recipes">Recipes</Link><span>/</span><span>{recipe.title}</span></div>
      <header className="recipe-detail-header">
        <div className="recipe-detail-title-block">
          <span className="eyebrow">{recipe.category.toUpperCase()} · {recipe.difficulty.toUpperCase()}</span>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <div className="detail-author-row">
            <span className="author-avatar"><Icon name="utensils" size={17} /></span>
            <span><strong>From the Cookoing recipe box</strong><small>Made to be adapted to your kitchen</small></span>
          </div>
        </div>
        <div className="recipe-detail-photo">
          <Image src={recipe.image} alt={recipe.title} fill priority sizes="(max-width: 760px) 100vw, 55vw" />
          <span className="photo-caption">Made for your table <span aria-hidden="true">✳</span></span>
        </div>
      </header>

      <div className="recipe-stat-bar">
        <div><Icon name="clock" size={20} /><span><small>TOTAL TIME</small><strong>{recipe.time} min</strong></span></div>
        <div><Icon name="utensils" size={20} /><span><small>PREP TIME</small><strong>{recipe.prepTime} min</strong></span></div>
        <div><Icon name="sparkles" size={20} /><span><small>COOK TIME</small><strong>{recipe.cookTime} min</strong></span></div>
        <div><span className="stat-category-dot" /><span><small>DIFFICULTY</small><strong>{recipe.difficulty}</strong></span></div>
      </div>

      <RecipeDetailClient recipe={recipe} />

      <section className="more-recipes-section">
        <div className="section-heading"><div><span className="eyebrow">KEEP THE GOOD FOOD GOING</span><h2>You might also love</h2></div><Link href="/recipes" className="text-link">All recipes <Icon name="arrow-up-right" size={16} /></Link></div>
        <div className="recipe-grid">{recommendations.map((item) => <RecipeCard recipe={item} key={item.slug} />)}</div>
      </section>
    </div>
  );
}
