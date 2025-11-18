import Image from "next/image";
import { ItemProfessionalChef } from "@/components/data/aboutData/ProfessionalChefData";
export default function ProfessionalChef() {
  const { name, photo, date } = ItemProfessionalChef.personData;
  const { title, description, srcImage } = ItemProfessionalChef;

  return (
    <section className="flex flex-col gap-8 justify-center items-center ">
      <h1 className="text-center">{title}</h1>
      <figure className="flex gap-x-5 justify-center items-center">
        <Image src={photo} alt={name} />
        <figcaption className="flex gap-5">
          <h6 className="font-bold">{name}</h6>
          <h6> {date} </h6>
        </figcaption>
      </figure>
      <p className="text-center"> {description} </p>
      <Image src={srcImage} alt={title} className="object-cover aspect-auto" />
    </section>
  );
}
