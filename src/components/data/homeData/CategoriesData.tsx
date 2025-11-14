import { StaticImageData } from "next/image";
import Breakfast from "../../assets/images/home/categories/Breakfast.png";
import Vegan from "../../assets/images/home/categories/Vegan.png";
import Meat from "../../assets/images/home/categories/Meat.png";
import Dessert from "../../assets/images/home/categories/Dessert.png";
import Lunch from "../../assets/images/home/categories/Lunch.png";
import Chocolate from "../../assets/images/home/categories/Chocolate.png";

export interface InterFaceCategories {
  photo: StaticImageData;
  nameFood: string;
  color: string;
}
export const dataTypeCategories: InterFaceCategories[] = [
  { photo: Breakfast, nameFood: "Breakfast", color: "#7082462f" },
  { photo: Vegan, nameFood: "Vegan", color: "#6cc63f4b" },
  { photo: Meat, nameFood: "Meat", color: "#cc271b33" },
  { photo: Dessert, nameFood: "Dessert", color: "#f09c003d" },
  { photo: Lunch, nameFood: "Lunch", color: "#00000034" },
  { photo: Chocolate, nameFood: "Chocolate", color: "#00000034" },
];
