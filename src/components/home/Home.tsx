import Slider from "./components/Slider";
import Categories from "./components/Categories";
import Recipes from "./components/Recipes";
import ChefOfKitchen from "./components/ChefOfKitchen";
import CheckOut from "./components/CheckOut";
import DeliciousRecipes from "./components/DeliciousRecipe";
import Inbox from "./components/Inbox";
export default function Home() {
  return (
    <section className="overflow-hidden">
      <Slider />
      <Categories />
      <Recipes />
      <ChefOfKitchen />
      <CheckOut />
      <DeliciousRecipes />
      <Inbox />
    </section>
  );
}
