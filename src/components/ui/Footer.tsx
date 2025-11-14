import Image from "next/image";
import { ItemFooter, CopyRight } from "../data/footer/FooterData";
import { figure } from "motion/react-client";
export default function Footer() {
  return (
    <section className="container mx-auto px-4 lg:px-8">
      <Image
        src={ItemFooter.photo}
        alt={ItemFooter.description}
        className="object-cover aspect-auto w-fit dark:bg-white bg-gray-400 p-4 rounded-xl "
      />
      <div className="flex justify-between items-center">
        <p className="text-gray-500 w-1/2">{ItemFooter.description}</p>
        <div className="grid md:grid-cols-4 grid-cols-2 content-end items-end justify-items-end gap-x-1 md:gap-4 w-1/2 md:w-fit ">
          {ItemFooter.pages.map((Item, ID) => (
            <h4 key={ID} className="footer ">
              {Item}
            </h4>
          ))}
        </div>
      </div>
      <hr className="my-10 h-[2px] text-black bg-gray-400" />
      <article className="flex justify-between items-center mt-10">
        <h4 className="text-center w-full"> {CopyRight.description} </h4>
        <div className="flex gap-x-4">
          {CopyRight.icons.map((Item, ID) => (
            <figure key={ID}>{<Item />}</figure>
          ))}
        </div>
      </article>
    </section>
  );
}
