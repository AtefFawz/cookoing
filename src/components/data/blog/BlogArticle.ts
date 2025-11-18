import { StaticImageData } from "next/image";
import Noodle from "../../assets/images/recipes/article/Noodle.png";
import Wade from "../../assets/images/recipes/article/Wade.png";
import Vegetarian from "../../assets/images/recipes/article/Vegetarian.png";
import Robert from "../../assets/images/recipes/article/Robert.png";
import ProfessionalChef from "../../assets/images/recipes/article/ProfessionalChef.png";
import Dianne from "../../assets/images/recipes/article/Dianne.png";
import Lasagna from "../../assets/images/recipes/article/Lasagna.png";
import Leslie from "../../assets/images/recipes/article/Leslie.png";
import Plantain from "../../assets/images/recipes/article/Plantain.png";
import Courtney from "../../assets/images/recipes/article/Courtney.png";
import Assistant from "../../assets/images/recipes/article/Assistant.png";
import Albert from "../../assets/images/recipes/article/Albert.png";

export interface DataTypeArticle {
  photo: StaticImageData;
  personalImage: StaticImageData;
  title: string;
  description: string;
  personalName: string;
  personalDate: string;
}
export const ArticleItem: DataTypeArticle[] = [
  {
    photo: Noodle,
    personalImage: Wade,
    title: "Crochet Projects for Noodle Lovers",
    description:
      "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
    personalName: "Wade Warren",
    personalDate: "12 November 2021",
  },

  {
    photo: Vegetarian,
    personalImage: Robert,
    title: "10 Vegetarian Recipes To Eat This Month",
    description:
      "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim  ",
    personalName: "Robert Fox",
    personalDate: "12 November 2021",
  },

  {
    photo: ProfessionalChef,
    personalImage: Dianne,
    title: "Full Guide to Becoming a Professional Chef",
    description:
      "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim  ",
    personalName: "Dianne Russell",
    personalDate: "12 November 2021",
  },

  {
    photo: Lasagna,
    personalImage: Leslie,
    title: "Simple & Delicious Vegetarian Lasagna",
    description:
      "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim  ",
    personalName: "Leslie Alexander",
    personalDate: "12 November 2021",
  },
  {
    photo: Plantain,
    personalImage: Courtney,
    title: "Plantain and Pinto Stew with Aji Verde",
    description:
      "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim  ",
    personalName: "Courtney Henry",
    personalDate: "12 November 2021",
  },

  {
    photo: Assistant,
    personalImage: Albert,
    title: "We’re Hiring a Communications Assistant!",
    description:
      "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim  ",
    personalName: "Albert Flores",
    personalDate: "12 November 2021",
  },
];
