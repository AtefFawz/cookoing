import Image from "next/image";
import { sliderData } from "../../data/homeData/SliderData";
import SubButton from "../../shared/components/SubButton";
import Button from "../../shared/components/Button";

export default function Slider() {
  return (
    <section className="flex flex-col md:flex-row w-full container mx-auto h-full pt-16">
      {/* Column Content  */}
      <div className="bg-primary dark:bg-gray-800 md:w-1/2 md:order-1 order-2 px-8 flex flex-col justify-center ">
        <h1>{sliderData.title}</h1>
        <p className="text-colorLight xl:max-w-[70%]">
          {sliderData.description}
        </p>
        <div className="flex gap-5">
          <SubButton content={sliderData.btnOne} Icon={sliderData.btnIconOne} />
          <SubButton content={sliderData.btnTwo} Icon={sliderData.btnIconTwo} />
        </div>
        {/* Data Person And Button */}
        <div className="flex justify-between items-center gap-2  mt-15 xl:mt-20">
          {/* Person */}
          <figure className="flex gap-2 py-10 w-1/2 md:gap-x-4">
            <Image
              width={40}
              height={40}
              loading="lazy"
              className=""
              src={sliderData.personal.photo}
              alt={`${sliderData.personal.name} from Slider Component`}
            />
            <figcaption>
              <h5 className="text-sm lg:text-lg">{sliderData.personal.name}</h5>
              <h6 className="text-[12px] lg:text-sm text-nowrap1">
                {sliderData.personal.date}
              </h6>
            </figcaption>
          </figure>
          <div className="w-1/2 md:w-fit">
            <Button
              content={sliderData.btnThree}
              Icon={sliderData.btnThreeIcon}
            />
          </div>
        </div>
      </div>
      {/* Column Image  */}
      <figure className="md:w-1/2 md:order-2 order-1">
        <Image
          src={sliderData.background}
          alt="Slider Background Image"
          width={700}
          height={400}
          priority
          className="object-cover h-full "
        />
      </figure>
    </section>
  );
}
