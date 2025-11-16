import Image from "next/image";
import { DataTypeArticle } from "../../data/blog/BlogArticle";
export default function ManyComponent({ data }: { data: DataTypeArticle }) {
  const {
    photo,
    title,
    description,
    personalName,
    personalDate,
    personalImage,
  } = data;
  return (
    //   Parent
    <div className="flex gap-5 my-8 items-start max-w-full ">
      {/* Image Big */}
      <figure>
        <Image src={photo} alt={title} className="object-cover aspect-auto" />
      </figure>
      {/* Title And Description */}
      <div className="flex flex-col gap-2 justify-evenly h-full w-full">
        <div>
          <h4 className={`editTitle`}>{title}</h4>
          <p className={`editSpacing`}>{description}</p>
        </div>
        <div className="flex gap-1 md:gap-4">
          <figure>
            <Image
              src={personalImage}
              alt={personalName}
              className="object-cover aspect-square  min-w-4"
            />
          </figure>
          <div className="flex gap-2 lg:gap-4 items-center">
            <h6 className={`editSpacing `}>{personalName}</h6>
            <p className={`editSpacing text-nowrap`}>{personalDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
