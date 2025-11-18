import { StaticImageData } from "next/image";
import { SvgIconComponent } from "@mui/icons-material";
import TimerIcon from "@mui/icons-material/Timer";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Badge from "../../assets/images/home/slider/Badge.png";
import Tomato from "../../assets/images/home/slider/tomatoes.png";
import Ellipse from "../../assets/images/home/slider/Ellipse.png";

export interface DataTypeSlider {
  title: string;
  description: string;
  btnOne: string;
  btnTwo: string;
  btnThree: string;
  btnThreeIcon: SvgIconComponent;
  Badge: StaticImageData;
  background: StaticImageData;
  btnIconOne: SvgIconComponent;
  btnIconTwo: SvgIconComponent;
  personal: {
    name: string;
    date: string;
    photo: StaticImageData;
  };
}

export const sliderData: DataTypeSlider = {
  title: "Spicy delicious chicken wings",
  description:
    "Lorem ipsum dolor sit abet, consectetuipisicing edit, sed do eiusmod tempor incident ut labore et dolore magna aliqut enim ad minim ",
  btnOne: "30 Minutes",
  btnIconOne: TimerIcon,
  btnIconTwo: RestaurantIcon,
  btnTwo: "Chicken",
  btnThree: "View Recipes",
  btnThreeIcon: PlayCircleIcon,
  Badge: Badge,
  background: Tomato,
  personal: {
    name: "John Smith",
    date: "15 March 2022",
    photo: Ellipse,
  },
};
