import {
  otherDataItem,
  HealthyItem,
} from "@/components/data/recipes/components/HealthJapanese";
import Image from "next/image";
export default function HealthJapanese() {
  const { AuthorIcon } = otherDataItem;
  const iconStyle = "justify-center items-center flex flex-col ";
  const icon =
    "dark:bg-primary bg-gray-400 rounded-[9999px] p-2 lg:p-4  text-gray-900";
  return (
    <section>
      <h1>{otherDataItem.heading}</h1>
      <div className="flex gap-4 justify-end items-center w-full py-4">
        <div className={`${iconStyle}`}>
          <span className={`${icon}`}>
            <otherDataItem.PrintIcon fontSize="large" />
          </span>

          <h5> {otherDataItem.titlePrint} </h5>
        </div>
        <div className={`${iconStyle}`}>
          <span className={`${icon}`}>
            {" "}
            <otherDataItem.ShareIcon fontSize="large" />
          </span>

          <h5> {otherDataItem.titleShare} </h5>
        </div>
      </div>
      <article className="flex items-center md:gap-4  lg:gap-10 ">
        <div className="flex gap-2 items-center border-r-2 border-gray-400 md:px-8 px-1">
          <span>
            <AuthorIcon />
          </span>
          <div>
            <h6>{otherDataItem.authorName}</h6>
            <h6>{otherDataItem.authorDate}</h6>
          </div>
        </div>
        {HealthyItem.map((item, ID) => (
          <div
            key={ID}
            className="flex items-center gap-1 md:gap-4 border-r-2 border-gray-400 md:px-8 px-2"
          >
            <item.Icon fontSize="small" />
            <div>
              <h6>{item.title}</h6>
              <h6>{item.description}</h6>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
