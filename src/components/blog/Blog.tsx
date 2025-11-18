import Article from "./components/Article";
import Inbox from "../shared/components/Inbox";
import Heading from "./components/Heading";
export default function Blog() {
  return (
    <section className="overflow-hidden">
      <Heading />
      <Article />
      <Inbox />
    </section>
  );
}
