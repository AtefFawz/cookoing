import { StaticImageData } from "next/image";
import Chicken from "../../assets/images/recipes/OtherRecipe/Chicken.png";
import Creamiest from "../../assets/images/recipes/OtherRecipe/Creamiest.png";
import Rice from "../../assets/images/recipes/OtherRecipe/Rice.png";
import Add from "../../assets/images/recipes/OtherRecipe/Ads.png";

export const IngredientsItem = {
  array: [
    "Lorem ipsum dolor sit ament",
    "Lorem ipsum dolor sit ament",
    "Lorem ipsum dolor sit ament",
    "Lorem ipsum dolor sit ament",
    "Lorem ipsum dolor sit ament",
  ],
  obgDat: {
    title: "Ingredients",
    subTitle: "For main dish",
    titleTwo: "Other Recipe",
    photoAdd: Add,
  },
};

export interface dataTypeOtherRecipe {
  title: string;
  description: string;
  photo: StaticImageData;
}

export const OtherRecipe: dataTypeOtherRecipe[] = [
  {
    title: "Chicken Meatball with Creamy Chees...",
    description: "By Andreas Paula",
    photo: Chicken,
  },
  {
    title: "The Creamiest Creamy Chicken an...",
    description: "By Andreas Paula",
    photo: Creamiest,
  },
  {
    title: "The Best Easy One Pot Chicken and Rice",
    description: "By Andreas Paula",
    photo: Rice,
  },
];
