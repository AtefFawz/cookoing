"use client";
import Image, { StaticImageData } from "next/image";
import Person from "../../assets/images/contactUsImages/person.png";
import { motion } from "framer-motion";
export default function Fields() {
  const Img: StaticImageData = Person;

  return (
    <section className=" w-full flex flex-col justify-center items-center">
      <h1 className="text-center pb-32">Contact us</h1>
      <div className="flex flex-col md:flex-row gap-4 items-center h-full">
        <figure className=" w-full ">
          <Image
            src={Img}
            alt="Image Contact Us"
            className="object-cover aspect-auto w-full"
          />
        </figure>
        <div className="md:grid md:grid-cols-2 flex flex-col  gap-4 w-full md:items-center h-full md:justify-items-stretch">
          <div>
            <label htmlFor="name">NAME</label>
            <input type="text" placeholder="Enter your name..." />
          </div>
          <div>
            <label>EMAIL ADDRESS</label>
            <input type="email" placeholder="Your email address..." />
          </div>
          <div>
            <label htmlFor="Subject">SUBJECT</label>
            <input type="text" id="Subject" placeholder="Enter subject..." />
          </div>
          <div>
            <label htmlFor="pet-select ">ENQUIRY TYPE</label>

            <select
              id="pet-select"
              className="p-[16px] rounded-lg  block  my-[10px] "
            >
              <option value="">Advertising</option>
              <option value="complaint">Dog</option>
              <option value="inquiry">Cat</option>
              <option value="Report">Hamster</option>
            </select>
          </div>
          <div className="w-full col-span-2">
            <label htmlFor="textarea">Message</label>
            <textarea
              id="textarea"
              className=" col-span-2 h-[200px] w-full"
            ></textarea>
          </div>
        </div>
      </div>
      {/*  */}
      <motion.div
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2, type: "tween", ease: "easeInOut" }}
        className="w-full flex justify-center pt-10 md:pt-16 "
      >
        <button className="text-[#FFFFFF] font-bold text-sm lg:py-5 lg:px-8 px-3 py-3 bg-[#000000] rounded-xl flex gap-2 items-center justify-center  text-nowrap h-fit w-[16rem]">
          Submit
        </button>
      </motion.div>
    </section>
  );
}
