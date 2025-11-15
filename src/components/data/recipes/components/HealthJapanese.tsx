import { SvgIconComponent } from "@mui/icons-material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import TimerIcon from "@mui/icons-material/Timer";
import PrintIcon from "@mui/icons-material/Print";
import IosShareIcon from "@mui/icons-material/IosShare";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Nutrition from "../../../assets/images/recipes/healthJapanese/Nutrition.png";
import { StaticImageData } from "next/image";
interface DataTypeHealth {
  title: string;
  description?: string;
  Icon: SvgIconComponent;
}

export const HealthyItem: DataTypeHealth[] = [
  { title: "PREP TIME", description: "15 Minutes", Icon: TimerIcon },
  { title: "COOK TIME", description: "15 Minutes", Icon: TimerIcon },
  { title: "Chicken", Icon: RestaurantIcon },
];
// ===========
interface OtherDataType {
  heading: string;
  AuthorIcon: SvgIconComponent;
  authorName: string;
  authorDate: string;

  PrintIcon: SvgIconComponent;
  titlePrint: string;
  ShareIcon: SvgIconComponent;
  titleShare: string;
}

export const otherDataItem: OtherDataType = {
  heading: "Health Japanese Fried Rice",
  AuthorIcon: AccountCircleIcon,
  authorName: "John Smith",
  authorDate: "15 March 2022",

  PrintIcon: PrintIcon,
  titlePrint: "PRINT",
  ShareIcon: IosShareIcon,
  titleShare: "SHARE",
};
export interface NutritionDataType {
  power: string;
  ratio: string;
}
export const NutritionItem: NutritionDataType[] = [
  { power: "Calories", ratio: "219.9 kcal" },
  { power: "Total Fat", ratio: "10.7 g" },
  { power: "Protein", ratio: "7.9 g" },
  { power: "Carbohydrate", ratio: "22.3 g" },
  { power: "Cholesterol", ratio: "37.4 mg" },
];

export const otherData: {
  title: string;
  description: string;
  photo: StaticImageData;
  descriptionTwo: string;
} = {
  title: "Nutrition Information",
  description:
    "adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  photo: Nutrition,
  descriptionTwo:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};
