import OtherRecipes from "@/components/shared/components/OtherRecipe";
import ManyComponent from "./MinyComponent";
import { ArticleItem } from "../../data/blog/BlogArticle";
import Error from "@/components/shared/components/Error";
export default function Article() {
  return (
    <section className="grid grid-cols-1 justify-between content-between md:grid-cols-3 container mx-auto px-2 md:px-4 lg:gap-8 md:gap-4 ">
      <article className="col-span-2">
        {ArticleItem?.length > 0 ? (
          ArticleItem.map((item, ID) => <ManyComponent data={item} key={ID} />)
        ) : (
          <Error />
        )}
      </article>
      <article className="col-span-1 w-full h-fit">
        <OtherRecipes />
      </article>
    </section>
  );
}
