import Link from "next/link";
import Icon from "@/components/ui/Icon";

export default function NotFound() {
  return (
    <div className="container not-found-page">
      <span className="eyebrow">A LITTLE DETOUR</span>
      <h1>Looks like this<br /><em>isn’t on the menu.</em></h1>
      <p>The page you’re looking for may have moved, or it might never have made it out of the kitchen.</p>
      <Link href="/" className="button button-dark">Back to the home page <Icon name="arrow-up-right" size={17} /></Link>
    </div>
  );
}
