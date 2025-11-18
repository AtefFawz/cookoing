import Image from "next/image";
import { ItemFooter, CopyRight } from "../data/footer/FooterData";
export default function Footer() {
  const { description } = CopyRight;
  const WebFlow = description.split(" ").slice(-2);
  const Copy = description.split(" ").slice(0, -2);
  return (
    <section className="border-t-[1px] pt-16 container mx-auto px-4 md:px-8">
      <div>
        <Image
          src={ItemFooter.photo}
          alt={ItemFooter.description}
          className="object-cover aspect-auto w-fit dark:bg-white bg-gray-400 p-4 rounded-xl "
        />
        <div className="flex justify-between items-center md:flex-row flex-col">
          <p className="text-gray-500 md:w-1/2">{ItemFooter.description}</p>
          <div className="grid grid-cols-4  content-end items-end justify-items-end gap-x-1 md:gap-4 md:w-1/2  ">
            {ItemFooter.pages.map((Item, ID) => (
              <h4 key={ID} className="footer ">
                {Item}
              </h4>
            ))}
          </div>
        </div>
        <hr className="my-10 h-[2px] text-black bg-gray-400" />
        <article className="flex justify-between items-center md:flex-row flex-col my-10">
          <h4 className="text-center w-full text-xl ">
            {" "}
            {Copy} <span className="text-[#FF7967]">{WebFlow}</span>{" "}
          </h4>
          <div className="flex gap-x-4">
            {CopyRight.icons.map((Item, ID) => (
              <figure key={ID}>{<Item />}</figure>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
