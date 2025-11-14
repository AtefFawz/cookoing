"use client";
import Image from "next/image";
import TimerIcon from "@mui/icons-material/Timer";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SubButton from "./SubButton";
import { DataTypeCard } from "../../data/homeData/DeliciousRecipe";
import { useState } from "react";
export default function Card(dataCard: DataTypeCard) {
  const { btn, title, photo, isBg } = dataCard;
  const [active, setActive] = useState(false);
  function handelClick() {
    setActive((prev) => !prev);
  }
  return (
    <article
      className={`${
        isBg ? "bg-primary" : "bg-[#ffffff]"
      } dark:bg-gray-800 h-full rounded-xl flex flex-col justify-between p-1 shadow-md hover:shadow-xl transition-all duration-300`}
    >
      <figure className="relative">
        <Image
          src={photo}
          alt={`${title} From recipes`}
          className="w-full aspect-video object-cover rounded-xl"
        />
        <figcaption>
          <h4 className="md:px-5 px-2">{title}</h4>
        </figcaption>
        <div
          onClick={handelClick}
          className="absolute top-2 z-10 right-2 flex justify-center items-center cursor-pointer bg-[#ffffff] rounded-full p-2 overflow-hidden w-fit h-fit"
        >
          <FavoriteIcon
            className={`${
              active ? "text-red-700" : "text-gray-400"
            } duration-800`}
          />
        </div>
      </figure>
      <div className="flex gap-y-2 lg:gap-x-4 md:gap-1 gap-4  pb-3 w-full ">
        <SubButton content="30 Minutes" Icon={TimerIcon} />
        <SubButton content={btn} Icon={RestaurantIcon} />
      </div>
    </article>
  );
}
