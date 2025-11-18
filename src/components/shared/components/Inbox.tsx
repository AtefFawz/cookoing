"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Heading from "./Heading";
import { InboxItem, Images } from "../../data/homeData/InboxData";
import Button from "./Button";

export default function Inbox() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-primary dark:bg-gray-800 py-16 px-8 rounded-xl relative overflow-hidden flex flex-col justify-between h-full"
    >
      <Heading data={InboxItem} />

      <div className="relative lg:w-[60%] w-full mx-auto">
        <input
          className="w-full h-[4rem] rounded-2xl pr-32 pl-2 text-gray-900 text-lg"
          placeholder="Enter your email..."
        />
        <div className="absolute z-10 right-1 top-0 h-full flex items-center">
          <Button content="Subscribe" />
        </div>
      </div>
      <figure className="lg:py-0 py-16">
        <Image
          src={Images.PhotoSalad}
          alt="Photo Salad "
          width={200}
          height={200}
          className="object-cover absolute bottom-0 right-[-60px] md:right-0 "
        />
        <Image
          src={Images.vegetables}
          alt="Photo vegetables "
          width={200}
          height={200}
          className="object-cover aspect-square absolute bottom-0 left-[-60px] md:left-0"
        />
      </figure>
    </motion.section>
  );
}
