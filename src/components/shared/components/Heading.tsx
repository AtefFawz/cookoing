import { HeadingDataType } from "../../data/homeData/HeadingData";
export default function Heading({ data }: { data: HeadingDataType }) {
  return (
    <article className={`flex justify-center items-center flex-col`}>
      <h3 className="text-center w-full">{data.title}</h3>
      <p className="text-colorLight">{data.description}</p>
    </article>
  );
}
