import IngredientsComponent from "../../shared/components/IngredientsComponent";
import Image from "next/image";
import {
  IngredientsItem,
  OtherRecipe,
} from "../../data/recipes/IngredientsData";
import Error from "@/components/shared/components/Error";
export default function Ingredients() {
  const { subTitle } = IngredientsItem.obgDat;
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 w-full h-full gap-5 items-center justify-center">
      <article className="md:col-span-2 w-full h-full">
        <h1 className="w-fit">{IngredientsItem.obgDat.title}</h1>
        <div>
          <h2>{subTitle}</h2>
          {IngredientsItem.array?.length > 0 ? (
            IngredientsItem.array.map((item, ID) => (
              <IngredientsComponent data={item} key={ID} />
            ))
          ) : (
            <Error />
          )}
        </div>
      </article>
      {/*  */}
      <article className="md:col-span-1 w-full max-h-full ">
        <h1>{IngredientsItem.obgDat.titleTwo}</h1>
        <div className="py-16">
          {OtherRecipe?.length > 0 ? (
            OtherRecipe.map((item, ID) => (
              <div key={ID} className="flex items-center  gap-4 my-5">
                <Image
                  src={item.photo}
                  alt={item.title}
                  className="object-cover aspect-auto "
                />
                <div>
                  <h4
                    style={{ padding: "0", margin: "0" }}
                    className="md:text-sm"
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{ padding: "0", margin: "0" }}
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
        </div>
      </article>
    </section>
  );
}
