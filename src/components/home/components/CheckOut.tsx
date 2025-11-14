import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import Heading from "../../shared/components/Heading";
import { headingData, ImagesItem } from "../../data/homeData/CheckOutData";
import Button from "../../shared/components/Button";
export default function CheckOut() {
  return (
    <section className="bg-primary dark:bg-gray-800 py-16 md:px-8 px-4 rounded-lg">
      <Heading data={headingData} />
      <figure className="grid grid-cols-2 md:grid-cols-4 gap-5  items-center justify-center">
        {ImagesItem.map((itemPhoto, index) => (
          <Image
            key={index}
            src={itemPhoto}
            alt="Photos Instagram "
            className=" object-cover h-full w-full aspect-auto"
          />
        ))}{" "}
      </figure>
      <div className="flex justify-center items-center w-full mt-16 lg:mt-32">
        <Button content="Instagram" Icon={InstagramIcon} />
      </div>
    </section>
  );
}
