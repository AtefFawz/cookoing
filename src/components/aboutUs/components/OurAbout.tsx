import Image from "next/image";
import { OurAboutItem } from "../../data/aboutData/ProfessionalChefData";
import Error from "@/components/shared/components/Error";
export default function OurAbout() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="col-span-2 ">
        {OurAboutItem?.length > 0 ? (
          OurAboutItem.map((item) => (
            <article
              key={item.title}
              className="flex flex-col items-start justify-start text-start"
            >
              <h2>{item.title}</h2>
              {item.img && (
                <Image
                  src={item.img}
                  alt={item.title || "about image"}
                  className="w-full object-cover aspect-auto pb-[3rem]"
                />
              )}
              <p style={{ padding: "0rem", margin: "0rem" }}>
                {item.description}
              </p>
            </article>
          ))
        ) : (
          <Error />
        )}
      </div>
    </section>
  );
}
