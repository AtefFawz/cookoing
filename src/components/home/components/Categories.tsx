import Image from "next/image";
import {
  dataTypeCategories,
  InterFaceCategories,
} from "../../data/homeData/CategoriesData";
export default function Categories() {
  return (
    <section>
      <h2>Categories</h2>
      <article className="grid grid-flow-row md:grid-cols-6 grid-cols-3 gap-5 w-full">
        {dataTypeCategories.map((item: InterFaceCategories, index) => (
          <figure
            style={{ backgroundColor: item.color }}
            key={index}
            className="flex flex-col items-center justify-center p-4 gap-2 text-center rounded-3xl transition-transform hover:scale-105 duration-300"
          >
            <Image
              width={90}
              height={90}
              src={item.photo}
              alt={item.nameFood}
              className="object-cover"
            />
            <figcaption>
              <h5>{item.nameFood}</h5>
            </figcaption>
          </figure>
        ))}
      </article>
    </section>
  );
}
