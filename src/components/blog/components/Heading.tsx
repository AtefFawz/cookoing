import Button from "../../shared/components/Button";
export default function Heading() {
  const obj: {
    title: string;
    description: string;
  } = {
    title: "Blog & Article",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  };
  return (
    <section className="text-center ">
      <h1>{obj.title}</h1>
      <p>{obj.description}</p>
      <div className="relative lg:w-[50%] w-full mx-auto mt-5">
        <input
          className="w-full h-[4rem] rounded-2xl pr-32 pl-2 text-gray-900 text-sm  border-[1px] border-gray-400 "
          placeholder="Search article, news or recipe..."
        />
        <div className="absolute z-10 right-1 top-0 h-full flex items-center">
          <Button content="Search" />
        </div>
      </div>
    </section>
  );
}
