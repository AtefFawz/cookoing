import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "The journal",
  description: "Small kitchen lessons, ingredient notes and inspiration for curious cooks.",
};

const stories = [
  { category: "KITCHEN NOTES", title: "A calmer way to plan the week’s meals", copy: "A few flexible ideas can make the everyday question of what’s for dinner feel a whole lot easier.", image: "/images/recipes/article/Lasagna.png", read: "4 min read", tone: "journal-featured" },
  { category: "INGREDIENT LOVE", title: "The little things that make a salad sing", copy: "Texture, temperature, acidity and a dressing that brings everything together.", image: "/images/recipes/article/Plantain.png", read: "3 min read" },
  { category: "GOOD TO KNOW", title: "How to build a better breakfast bowl", copy: "A simple balance of something creamy, something fresh and a little crunch.", image: "/images/recipes/article/Vegetarian.png", read: "5 min read" },
  { category: "COOKING BASICS", title: "A few small habits for a happier kitchen", copy: "Tiny prep rituals that make cooking easier before the pan even gets hot.", image: "/images/recipes/article/Noodle.png", read: "4 min read" },
];

export default function JournalPage() {
  return (
    <div className="container page-shell journal-page">
      <div className="page-intro journal-intro">
        <span className="eyebrow"><span className="eyebrow-dot" /> NOTES FROM THE KITCHEN</span>
        <h1>A little food<br /><em>for thought.</em></h1>
        <p>Ideas, ingredients and small reminders for making everyday cooking a little more enjoyable.</p>
      </div>
      <section className="journal-grid" aria-label="Journal stories">
        {stories.map((story, index) => (
          <article className={`journal-card${index === 0 ? " journal-card-featured" : ""}`} key={story.title}>
            <div className="journal-image"><Image src={story.image} alt="" fill sizes={index === 0 ? "(max-width: 760px) 100vw, 55vw" : "(max-width: 760px) 100vw, 30vw"} /></div>
            <div className="journal-card-content">
              <span className="eyebrow">{story.category}</span>
              <h2>{story.title}</h2>
              <p>{story.copy}</p>
              <div className="journal-card-footer"><span>{story.read}</span><span className="journal-read-more">A note to keep <Icon name="arrow-up-right" size={16} /></span></div>
            </div>
          </article>
        ))}
      </section>
      <div className="journal-footnote"><span aria-hidden="true">✳</span> A collection of little things we think are worth sharing.</div>
      <section className="journal-cta"><span className="eyebrow">NEED A LITTLE INSPIRATION?</span><h2>Skip to the good part.</h2><Link href="/recipes" className="button button-dark">Explore recipes <Icon name="arrow-up-right" size={17} /></Link></section>
    </div>
  );
}
