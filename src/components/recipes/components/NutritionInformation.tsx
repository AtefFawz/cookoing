import Image from "next/image";
import {
  NutritionDataType,
  NutritionItem,
  otherData,
} from "../../data/recipes/components/HealthJapanese";
import Error from "../../shared/components/Error";
export default function NutritionInformation() {
  return (
    <section style={{ margin: "4rem 0 0" }}>
      <div className=" grid grid-cols-1 md:grid-cols-3 w-full justify-between gap-5 items-center ">
        <figure className="md:col-span-2 w-full h-full ">
          <Image
            src={otherData.photo}
            alt="Photo Recipes"
            className="object-cover aspect-video rounded-2xl h-full w-full "
          />
        </figure>

        <article className="bg-primary dark:bg-gray-800 rounded-2xl p-4 md:col-span-1 h-full w-full">
          <h2>{otherData.title}</h2>
          {NutritionItem?.length > 0 ? (
            NutritionItem.map((item: NutritionDataType, ID) => (
              <div
                key={ID}
                className="flex justify-between items-center border-b-2 "
              >
                <h5>{item.power}</h5>
                <h4> {item.ratio} </h4>
              </div>
            ))
          ) : (
            <Error />
          )}
        </article>
      </div>
      <p className="text-gray-500 py-16"> {otherData.descriptionTwo} </p>
    </section>
  );
}
