import { SvgIconComponent } from "@mui/icons-material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import TimerIcon from "@mui/icons-material/Timer";
import PrintIcon from "@mui/icons-material/Print";
import IosShareIcon from "@mui/icons-material/IosShare";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
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
