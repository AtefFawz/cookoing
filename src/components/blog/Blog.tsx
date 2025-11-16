import Article from "./components/Article";
import Inbox from "../shared/components/Inbox";
import Heading from "./components/Heading";
export default function Blog() {
  return (
    <section className="container mx-auto px-2 lg:px-4 overflow-hidden">
      <Heading />
      <Article />
      <Inbox />
    </section>
  );
}
