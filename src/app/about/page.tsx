import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Our story",
  description: "A little about the thinking behind Cookoing and the joy of everyday cooking.",
};

const values = [
  { number: "01", title: "Keep it doable", copy: "A good recipe should fit into real life, with ingredients you can find and steps you can follow." },
  { number: "02", title: "Make room to play", copy: "Treat every recipe as a starting point. Swap, taste, adjust and make it yours." },
  { number: "03", title: "Enjoy the process", copy: "The best part isn’t always the plate. It’s the little moments that happen along the way." },
];

export default function AboutPage() {
  return (
    <div className="container page-shell about-page">
      <section className="about-hero">
        <div className="about-hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot" /> A LITTLE ABOUT US</span>
          <h1>More than recipes.<br /><em>A feeling.</em></h1>
          <p>We believe everyday cooking can be simple, creative and genuinely joyful. Cookoing is a place to find the next thing you can’t wait to make.</p>
          <Link href="/recipes" className="button button-dark">Come cook with us <Icon name="arrow-up-right" size={17} /></Link>
        </div>
        <div className="about-hero-image">
          <Image src="/images/about/MissChef.png" alt="A home cook preparing a meal in a bright kitchen" fill priority sizes="(max-width: 760px) 100vw, 52vw" />
          <span className="about-image-note">A GOOD DAY<br />STARTS IN THE KITCHEN ✳</span>
        </div>
      </section>

      <section className="about-manifesto section-space">
        <span className="eyebrow">OUR LITTLE PHILOSOPHY</span>
        <h2>There’s no one right way to cook.<br /><em>There’s your way.</em></h2>
        <p>Some days call for a slow simmer. Some days call for whatever is in the fridge and twenty minutes to make it happen. Both deserve a good recipe. We want to make the kitchen feel less intimidating and a lot more inviting.</p>
      </section>

      <section className="values-section section-space">
        <div className="values-intro"><span className="eyebrow">THE WAY WE LIKE IT</span><h2>Good food, without<br />the fuss.</h2><p>Three simple ideas guide everything we share.</p></div>
        <div className="values-list">{values.map((value) => <article className="value-item" key={value.number}><span>{value.number}</span><div><h3>{value.title}</h3><p>{value.copy}</p></div><Icon name="arrow-up-right" size={18} /></article>)}</div>
      </section>

      <section className="about-image-band">
        <Image src="/images/about/ProfessionalChef.png" alt="A chef working carefully in a professional kitchen" fill sizes="100vw" />
        <div><span className="eyebrow">TAKE A SEAT AT THE TABLE</span><h2>Make something good.<br /><em>Share it with someone.</em></h2></div>
      </section>

      <section className="about-bottom-cta section-space">
        <span className="eyebrow">READY WHEN YOU ARE</span>
        <h2>Let’s find your next<br /><em>favourite.</em></h2>
        <Link href="/recipes" className="button button-dark">Explore the recipes <Icon name="arrow-up-right" size={17} /></Link>
      </section>
    </div>
  );
}
