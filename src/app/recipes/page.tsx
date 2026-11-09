import type { Metadata } from "next";
import RecipesExplorer from "@/features/recipes/components/RecipesExplorer";

export const metadata: Metadata = {
  title: "Explore recipes",
  description: "Search, filter and save easy, delicious recipes for every kind of day.",
};

type SearchParams = Record<string, string | string[] | undefined>;

export default async function RecipesPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const params = await searchParams;
  const query = typeof params.q === "string" ? params.q : "";
  const category = typeof params.category === "string" ? params.category : "";
  const showFavorites = params.favorites === "1";
  return (
    <div className="container page-shell recipes-page">
      <div className="page-intro recipes-intro">
        <span className="eyebrow"><span className="eyebrow-dot" /> THE RECIPE BOX</span>
        <h1>Find something<br /><em>delicious.</em></h1>
        <p>From five-minute fixes to slow Sunday favourites, there’s a little something for every appetite.</p>
      </div>
      <RecipesExplorer key={`${query}:${category}:${showFavorites}`} initialQuery={query} initialCategory={category} showFavoritesInitially={showFavorites} />
    </div>
  );
}
