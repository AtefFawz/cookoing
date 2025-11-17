"use client";
import { motion } from "framer-motion";
import { parentAnimate } from "@/components/shared/animation/Animation";
import Card from "../../shared/components/Card";
import { recipesItemCard } from "../../data/homeData/DeliciousRecipe";
export default function Cards() {
  return (
    <section>
      <h1 className="text-center">You may like these recipe too</h1>
      <motion.article
        variants={parentAnimate}
        initial="hidden"
        whileInView="visible"
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  w-full h-full gap-x-5 gap-y-5 "
      >
        {recipesItemCard.slice(0, 4).map((item, ID) => {
          return <Card {...item} key={ID} />;
        })}
      </motion.article>
    </section>
  );
}
