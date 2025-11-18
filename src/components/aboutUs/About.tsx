import ProfessionalChef from "./components/ProfessionalChef";
import OurAbout from "./components/OurAbout";
import YourLike from "./components/YourLike";
import Inbox from "../shared/components/Inbox";
export default function About() {
  return (
    <section className="overflow-hidden">
      <ProfessionalChef />
      <OurAbout />
      <Inbox />
      <YourLike />
    </section>
  );
}
