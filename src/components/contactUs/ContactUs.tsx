import Fields from "./components/Fields";
import Slider from "../shared/components//Inbox";
import Cards from "./components/Cards";
export default function ContactUs() {
  return (
    <section className="container mx-auto px-2 lg:px-4 overflow-hidden">
      <Fields />
      <Slider />
      <Cards />
    </section>
  );
}
