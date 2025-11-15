"use client";
import { motion } from "framer-motion";
import { ItemHeading } from "../../data/homeData/HeadingData";
import Heading from "../../shared/components/Heading";
import Card from "../../shared/components/Card";
import { TestyRecipes } from "../../data/homeData/TastyRecipes";
import { parentAnimate } from "@/components/shared/animation/Animation";
export default function Recipes() {
  return (
    <section>
      <Heading data={ItemHeading} />
      <motion.article
        variants={parentAnimate}
        initial="hidden"
        whileInView="visible"
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  w-full h-full gap-x-5  gap-y-5 "
      >
        {TestyRecipes.map((item, ID) => {
          return <Card {...item} key={ID} />;
        })}
      </motion.article>
    </section>
  );
}
