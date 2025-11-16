import Image from "next/image";
import { OtherRecipe } from "../../data/recipes/IngredientsData";
import Error from "./Error";
export default function OtherRecipes() {
  return (
    <article className="h-full w-full py-7 flex flex-col  justify-between gap-6">
      {OtherRecipe?.length > 0 ? (
        OtherRecipe.map((item, ID) => (
          <div key={ID} className="flex items-center  gap-4 md:gap-2 lg:gap-4">
            <Image
              src={item.photo}
              alt={item.title}
              className="object-cover aspect-auto h-full"
            />
            <div>
              <h4
                style={{ padding: "5px 0", margin: "5px 0" }}
                className=" text-sm xl:text-lg"
              >
                {item.title}
              </h4>
              <p
                style={{ padding: "5px 0", margin: "5px 0" }}
                className="text-gray-500"
              >
                {item.description}
              </p>
            </div>
          </div>
        ))
      ) : (
        <Error />
      )}
    </article>
  );
}
