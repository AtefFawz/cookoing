import Image from "next/image";
import { ItemDataKitchen } from "../../data/homeData/ChefInKitchenData";
import Button from "../../shared/components/Button";
export default function ChefOfKitchen() {
  return (
    <section>
      <div className="flex md:flex-row flex-col justify-center items-center w-full ">
        <div className="flex flex-col md:w-1/2 md:order-1 order-2 px-3">
          <h2>{ItemDataKitchen.title}</h2>
          <p id="chefKitchen" className="text-gray-500 max-w-[80%] px-3">
            {ItemDataKitchen.description}
          </p>
          <div className="w-fit">
            {" "}
            <Button content={ItemDataKitchen.btn} />
          </div>
        </div>
        <Image
          src={ItemDataKitchen.photo}
          alt={ItemDataKitchen.title}
          className=" aspect-video object-cover rounded-xl  md:w-1/2 md:order-2 order-1"
        />
      </div>
    </section>
  );
}
