"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import TimerIcon from "@mui/icons-material/Timer";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SubButton from "./SubButton";
import { DataTypeCard } from "../../data/homeData/DeliciousRecipe";
import { useState } from "react";
import { childAnimateRight } from "../animation/Animation";
export default function Card(dataCard: DataTypeCard) {
  const { btn, title, photo, isBg } = dataCard;
  const [active, setActive] = useState(false);
  function handelClick() {
    setActive((prev) => !prev);
  }
  return (
    <motion.article
      variants={childAnimateRight}
      transition={{ duration: 1, type: "spring", ease: "easeInOut" }}
    >
      <div
        className={`${
          isBg ? "bg-primary" : "bg-[#ffffff]"
        } dark:bg-gray-800 h-full rounded-xl flex flex-col justify-between p-1 shadow-sm hover:shadow-lg duration-300`}
      >
        <figure className="relative ">
          <div className="overflow-hidden rounded-xl">
            <Image
              src={photo}
              alt={`${title} From recipes`}
              className="w-full aspect-video object-cover rounded-xl hover:scale-125 overflow-hidden duration-300 cursor-pointer"
            />
          </div>

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
              } duration-300`}
            />
          </div>
        </figure>
        <div className="flex gap-y-2 lg:gap-x-4 md:gap-1 gap-4  pb-3 w-full ">
          <SubButton content="30 Minutes" Icon={TimerIcon} />
          <SubButton content={btn} Icon={RestaurantIcon} />
        </div>
      </div>
    </motion.article>
  );
}
