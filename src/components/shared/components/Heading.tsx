import { HeadingDataType } from "../../data/homeData/HeadingData";
export default function Heading({ data }: { data: HeadingDataType }) {
  console.log(data);
  return (
    <article className={`flex justify-center items-center flex-col`}>
      <h3 className="text-start w-full">{data.title}</h3>
      <p className="text-colorLight">{data.description}</p>
    </article>
  );
}
