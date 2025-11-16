import HealthJapanese from "./components/HealthJapanese";
import NutritionInformation from "./components/NutritionInformation";
import Ingredients from "./components/Ingredients";
import Directions from "./components//Directions";
import Inbox from "../shared/components/Inbox";
import RecipesToo from "./components/Recipetoo";

export default function Recipes() {
  return (
    <section className="container mx-auto px-4 lg:px-8">
      <HealthJapanese /> <NutritionInformation /> <Ingredients /> <Directions />
      <section>
        <Inbox />
        <RecipesToo />
      </section>
    </section>
  );
}
