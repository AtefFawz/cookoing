import Image from "next/image";
import Error from "@/components/shared/components/Error";
import IngredientsComponent from "../../shared/components/IngredientsComponent";

import {
  DirectionsItem,
  ObgSubDirections,
} from "../../data/recipes/DirectionsData";
export default function Directions() {
  return (
    <section>
      <h1>{ObgSubDirections.title}</h1>
      <figure>
        <Image
          src={ObgSubDirections.src}
          alt={ObgSubDirections.title}
          className="object-cover aspect-auto w-full py-16"
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
