import Image from "next/image";
import { OtherRecipe } from "../../data/recipes/IngredientsData";
import Error from "./Error";
export default function OtherRecipes() {
  return (
    <section>
      {OtherRecipe?.length > 0 ? (
        OtherRecipe.map((item, ID) => (
          <div className="flex items-center">
            <Image
              src={item.photo}
              alt={item.title}
              className="object-cover aspect-auto "
            />
            <div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))
      ) : (
        <Error />
      )}
    </section>
  );
}
