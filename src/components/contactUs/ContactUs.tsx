import Fields from "./components/Fields";
import Slider from "../shared/components//Inbox";
import Cards from "./components/Cards";
export default function ContactUs() {
  return (
    <section className="overflow-hidden container mx-auto ">
      <Fields />
      <Slider />
      <Cards />
    </section>
  );
}
