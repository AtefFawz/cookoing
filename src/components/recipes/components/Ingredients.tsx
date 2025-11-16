import IngredientsComponent from "../../shared/components/IngredientsComponent";
import Image from "next/image";
import { IngredientsItem } from "../../data/recipes/IngredientsData";
import Error from "@/components/shared/components/Error";
import OtherRecipes from "@/components/shared/components/OtherRecipe";
export default function Ingredients() {
  const { subTitle, titleTwo, photoAdd, title } = IngredientsItem.obgDat;
  const { array } = IngredientsItem;
  return (
    <section
      style={{ padding: "0", margin: "0" }}
      className="grid grid-cols-1 md:grid-cols-3 w-full gap-5 content-between"
    >
      <article className="md:col-span-2 w-full h-full">
        <h1 className="w-fit">{title}</h1>
        <div>
          <h2>{subTitle}</h2>
          {array?.length > 0 ? (
            array.map((item, ID) => (
              <IngredientsComponent data={item} key={ID} />
            ))
          ) : (
            <Error />
          )}
        </div>
      </article>
      {/*  */}
      <article className="md:col-span-1 w-full max-h-full ">
        <h1>{titleTwo}</h1>
        <div>
          <OtherRecipes />
        </div>
      </article>
      <article className="md:col-span-2 w-full h-full">
        <h2>For the sauce</h2>
        {array?.length > 0 ? (
          array.map((item, ID) => <IngredientsComponent data={item} key={ID} />)
        ) : (
          <Error />
        )}
      </article>
      <Image
        src={photoAdd}
        alt="Photo Add"
        className="object-cover aspect-video md:col-span-1 h-full rounded-2xl"
      />
    </section>
  );
}
