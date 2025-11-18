import { StaticImageData } from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Logo from "../../assets/images/footer/Logo..png";
import { SvgIconComponent } from "@mui/icons-material";
export interface DataTypeFooter {
  photo: StaticImageData;
  description: string;
  pages: string[];
}
export const ItemFooter: DataTypeFooter = {
  photo: Logo,
  description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, ",
  pages: ["Recipes", "Blog", "Contact", "About us"],
};
// Copy Right
interface TypeCopyRight {
  description: string;
  icons: SvgIconComponent[];
}
export const CopyRight: TypeCopyRight = {
  description: "© 2020 Flow base. Powered by ,Web flow",
  icons: [InstagramIcon, FacebookIcon, TwitterIcon],
};
