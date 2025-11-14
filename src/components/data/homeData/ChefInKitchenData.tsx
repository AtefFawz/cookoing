import { StaticImageData } from "next/image";
import { HeadingDataType } from "./HeadingData";
import ChefOfKitchen from "../../assets/images/home/chefInKitchen/ChefKitchen.png";
export interface DataTypeChefOfKitchen extends HeadingDataType {
  photo: StaticImageData;
  btn: string;
}
export const ItemDataKitchen: DataTypeChefOfKitchen = {
  title: "Everyone can be a chef in their own kitchen",
  description:
    "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim ",
  btn: "Learn More",
  photo: ChefOfKitchen,
};
