"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  dataTypeCategories,
  InterFaceCategories,
} from "../../data/homeData/CategoriesData";
import {
  parentAnimate,
  childAnimateLeft,
  childAnimateRight,
} from "@/components/shared/animation/Animation";
export default function Categories() {
  return (
    <section>
      <h2>Categories</h2>
      <motion.article
        variants={parentAnimate}
        initial="hidden"
        whileInView="visible"
        className="grid grid-flow-row md:grid-cols-6 grid-cols-3 md:gap-4 gap-2 w-full"
      >
        {dataTypeCategories.map((item: InterFaceCategories, index) => (
          <motion.figure
            variants={childAnimateRight}
            style={{ backgroundColor: item.color }}
            key={index}
            className="flex flex-col items-center justify-center p-2 gap-2 text-center rounded-3xl transition-transform hover:scale-105 duration-300 w-full"
          >
            <Image
              width={60}
              height={60}
              src={item.photo}
              alt={item.nameFood}
              className="object-cover"
            />
            <figcaption>
              <h5>{item.nameFood}</h5>
            </figcaption>
          </motion.figure>
        ))}
      </motion.article>
    </section>
  );
}
