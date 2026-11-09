import Link from "next/link";
import Icon from "@/components/ui/Icon";

const footerLinks = [
  { label: "Recipes", href: "/recipes" },
  { label: "Our story", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-block">
            <Link className="brand footer-brand" href="/">
              <span className="brand-mark"><Icon name="utensils" size={19} /></span>
              <span>cookoing<span className="brand-period">.</span></span>
            </Link>
            <p>Recipes worth slowing down for. Made for real kitchens, curious cooks and everyday good food.</p>
          </div>
          <div className="footer-links-block">
            <span className="eyebrow">EXPLORE</span>
            <div className="footer-links">
              {footerLinks.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
            </div>
          </div>
          <div className="footer-note-block">
            <span className="eyebrow">A LITTLE REMINDER</span>
            <p>It doesn’t have to be perfect. It just has to be delicious.</p>
            <Link href="/recipes" className="text-link">Find your next favourite <Icon name="arrow-up-right" size={16} /></Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Cookoing. Made with care.</span>
          <span className="footer-bottom-right">A recipe for a better everyday <span aria-hidden="true">✳</span></span>
        </div>
      </div>
    </footer>
  );
}
