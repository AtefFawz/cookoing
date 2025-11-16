import Image from "next/image";
import Error from "@/components/shared/components/Error";
import IngredientsComponent from "../../shared/components/IngredientsComponent";
import {
  DirectionsItem,
  ObgSubDirections,
} from "../../data/recipes/DirectionsData";
export default function Directions() {
  const { title, src } = ObgSubDirections;
  return (
    <section style={{ padding: "1rem 0", margin: "2rem 0" }}>
      <h1>{title}</h1>
      <figure>
        <Image
          src={src}
          alt={title}
          className="object-cover aspect-auto w-full py-8"
        />
      </figure>
      {DirectionsItem?.length > 0 ? (
        DirectionsItem.map((item, idx) => (
          <div key={idx}>
            <IngredientsComponent data={item.title} desc={item.description} />
          </div>
        ))
      ) : (
        <Error />
      )}
    </section>
  );
}
