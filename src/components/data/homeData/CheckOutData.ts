import { StaticImageData } from "next/image";
import { HeadingDataType } from "./HeadingData";
import PostOne from "../../assets/images/home/instagram/PostOne.png";
import PostTwo from "../../assets/images/home/instagram/PostTwo.png";
import PostThree from "../../assets/images/home/instagram/PostThree.png";
import PostFour from "../../assets/images/home/instagram/PostFour.png";

export const ImagesItem: StaticImageData[] = [
  PostOne,
  PostTwo,
  PostThree,
  PostFour,
];

export const headingData: HeadingDataType = {
  title: "Check out @foodieland on Instagram",
  description:
    "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim ",
};
