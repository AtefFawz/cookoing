import { StaticImageData } from "next/image";
import Beef from "../../assets/images/home/recipes/Beef.png";
import ChickenSalad from "../../assets/images/home/recipes/ChickenSalad.png";
import FirecrackerVegan from "../../assets/images/home/recipes/FirecrackerVegan.png";
import FriedRice from "../../assets/images/home/recipes/FriedRice.png";
import Salad from "../../assets/images/home/recipes/Salad.png";
import Sandwiches from "../../assets/images/home/recipes/Sandwiches.png";
import SoupMushroom from "../../assets/images/home/recipes/SoupMushroom.png";
import Vegetarian from "../../assets/images/home/recipes/Vegetarian.png";
import { HeadingDataType } from "./HeadingData";

export const HeadingData: HeadingDataType = {
  title: "Try this delicious recipe  to make your day",
  description:
    "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim ",
};

export interface DataTypeCard {
  photo: StaticImageData;
  title: string;
  btn: string;
  isBg: boolean;
}
export const recipesItemCard: DataTypeCard[] = [
  {
    photo: Beef,
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    btn: "Western",
    isBg: false,
  },
  {
    photo: ChickenSalad,
    title: "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
    btn: "Healthy",
    isBg: false,
  },
  {
    photo: FirecrackerVegan,
    title: "Firecracker Vegan Lettuce Wraps - Spicy! ",
    btn: "Seafood",
    isBg: false,
  },
  {
    photo: FriedRice,
    title: "Healthy Japanese Fried Rice with Asparagus ",
    btn: "Healthy",
    isBg: false,
  },
  {
    photo: Salad,
    title: "Mixed Tropical Fruit Salad with Superfood Boosts  ",
    btn: "Healthy",
    isBg: false,
  },
  {
    photo: Sandwiches,
    title: "Barbeque Spicy Sandwiches with Chips ",
    btn: "Snack",
    isBg: false,
  },
  {
    photo: SoupMushroom,
    title: "Chicken Ramen Soup with Mushroom ",
    btn: "Japanese",
    isBg: false,
  },
  {
    photo: Vegetarian,
    title: "Cauliflower Walnut Vegetarian Taco Meat",
    btn: "Eastern",
    isBg: false,
  },
];
