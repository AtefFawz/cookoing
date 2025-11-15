import HealthJapanese from "./components/HealthJapanese";
import NutritionInformation from "./components/NutritionInformation";
import Ingredients from "./components/Ingredients";
export default function Recipes() {
  return (
    <section className="container mx-auto px-4 lg:px-8">
      <HealthJapanese /> <NutritionInformation /> <Ingredients />
    </section>
  );
}
