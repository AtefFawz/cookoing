import { StaticImageData } from "next/image";
import Chef from "../../assets/images/about/ProfessionalChef.png";
import Person from "../../assets/images/about/Ellipse.png";
import MissChef from "../../assets/images/about/MissChef.png";

export interface ProfessionalDataType {
  title: string;
  description: string;
  personData: {
    photo: StaticImageData;
    name: string;
    date: string;
  };
  srcImage: StaticImageData;
}

export const ItemProfessionalChef: ProfessionalDataType = {
  title: "Full Guide to Becoming a Professional Chef",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.",
  personData: {
    photo: Person,
    name: "John Smith",
    date: "15 March 2022",
  },
  srcImage: Chef,
};

// !SECTION TWO

interface OurAbutDatatype {
  title: string;
  img?: StaticImageData;
  description: string;
  id: number;
}

export const OurAboutItem: OurAbutDatatype[] = [
  {
    id: 1,
    title: "How did you start out in the food industry?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.",
  },
  {
    id: 2,

    title: "What do you like most about your job?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.",
  },
  {
    id: 3,
    title: "Do you cook at home on your days off?",
    img: MissChef,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.",
  },
  {
    id: 4,

    title:
      "What would your advice be to young people looking to get their foot in the door?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.",
  },
  {
    id: 5,

    title:
      "What is the biggest misconception that people have about being a professional chef?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.",
  },
];
