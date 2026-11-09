import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import RecipeCard from "@/features/recipes/components/RecipeCard";
import { recipes } from "@/features/recipes/data/recipes";

const categoryCards = [
  { name: "Breakfast", subtitle: "Slow mornings", image: "/images/home/categories/Breakfast.png", tone: "category-peach" },
  { name: "Lunch", subtitle: "Midday favourites", image: "/images/home/categories/Lunch.png", tone: "category-sage" },
  { name: "Dinner", subtitle: "End the day well", image: "/images/home/categories/Meat.png", tone: "category-lilac" },
  { name: "Vegetarian", subtitle: "Plant-forward plates", image: "/images/home/categories/Vegan.png", tone: "category-green" },
  { name: "Dessert", subtitle: "A little something", image: "/images/home/categories/Dessert.png", tone: "category-yellow" },
];

export default function HomePage() {
  const featured = recipes.filter((recipe) => recipe.featured).slice(0, 4);
  const latest = recipes.filter((recipe) => !recipe.featured).slice(0, 4);

  return (
    <>
      <section className="container home-hero-section">
        <div className="home-hero">
          <div className="hero-copy">
            <span className="eyebrow hero-eyebrow"><span className="eyebrow-dot" /> A FRESH TAKE ON EVERYDAY COOKING</span>
            <h1>Good food.<br /><em>Good mood.</em><br />Every single day.</h1>
            <p>Simple recipes, lovely ingredients and little ideas that make cooking feel like the best part of your day.</p>
            <div className="hero-actions">
              <Link href="/recipes" className="button button-dark">Explore recipes <Icon name="arrow-up-right" size={17} /></Link>
              <Link href="/about" className="button button-text">Get to know us <Icon name="arrow-right" size={17} /></Link>
            </div>
            <div className="hero-proof">
              <span className="proof-icon"><Icon name="check" size={15} /></span>
              <p><strong>Clear steps, flexible servings</strong><br />A little more confidence in every cook.</p>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrap">
              <Image src="/images/home/slider/tomatoes.png" alt="A colourful, freshly prepared meal with tomatoes and herbs" fill priority sizes="(max-width: 760px) 100vw, 52vw" className="hero-image" />
            </div>
            <div className="hero-sticker"><span>THE</span><strong>good<br />stuff</strong><span>IS IN HERE ✳</span></div>
            <div className="hero-caption"><span className="caption-line" /> Freshly made, always</div>
          </div>
          <div className="hero-background-mark" aria-hidden="true">C.</div>
        </div>
        <div className="hero-bottomline"><span>GOOD INGREDIENTS, NO FUSS</span><span>MADE TO BE SHARED <span aria-hidden="true">✳</span></span><span>YOUR KITCHEN, YOUR RULES</span></div>
      </section>

      <section className="container home-categories-section section-space">
        <SectionHeading eyebrow="FIND YOUR CRAVING" title="What sounds good today?" description="Pick a mood, follow a craving or just see where the good stuff takes you." />
        <div className="category-grid">
          {categoryCards.map((category) => (
            <Link href={`/recipes?category=${encodeURIComponent(category.name)}`} key={category.name} className={`category-card ${category.tone}`}>
              <span className="category-image"><Image src={category.image} alt="" fill sizes="110px" /></span>
              <span className="category-copy"><strong>{category.name}</strong><small>{category.subtitle}</small></span>
              <Icon name="arrow-up-right" size={17} />
            </Link>
          ))}
        </div>
      </section>

      <section className="container section-space home-featured-section">
        <SectionHeading eyebrow="A FEW GOOD PLACES TO START" title="Recipes to fall for" description="A handful of fresh ideas for your next meal." action={<Link href="/recipes" className="button button-outline">All recipes <Icon name="arrow-right" size={16} /></Link>} />
        <div className="recipe-grid featured-grid">
          {featured.map((recipe) => <RecipeCard recipe={recipe} key={recipe.slug} />)}
        </div>
      </section>

      <section className="container home-story-section section-space">
        <div className="story-image-wrap">
          <Image src="/images/home/chefInKitchen/ChefKitchen.png" alt="A chef enjoying the process of cooking in a bright kitchen" fill sizes="(max-width: 760px) 100vw, 50vw" />
          <span className="story-image-tag">A LITTLE MORE JOY<br />IN EVERY BITE</span>
        </div>
        <div className="story-copy">
          <span className="eyebrow">A NOTE FROM OUR KITCHEN</span>
          <h2>Cooking should feel like <em>you.</em></h2>
          <p>Not a performance. Not a long list of rules. Just good ingredients, a recipe you can trust and room to make it your own.</p>
          <p>That’s the idea behind Cookoing: a place to find fresh inspiration and build a little more confidence, one meal at a time.</p>
          <Link href="/about" className="button button-dark">Our story <Icon name="arrow-up-right" size={17} /></Link>
          <div className="story-signoff">Cook with curiosity <span aria-hidden="true">✳</span></div>
        </div>
      </section>

      <section className="container section-space home-latest-section">
        <SectionHeading eyebrow="MORE TO PUT ON YOUR LIST" title="A little more inspiration" description="New ideas for the days when you need them most." action={<Link href="/recipes" className="text-link">Browse the kitchen <Icon name="arrow-up-right" size={16} /></Link>} />
        <div className="recipe-grid">
          {latest.map((recipe) => <RecipeCard recipe={recipe} key={recipe.slug} />)}
        </div>
      </section>

      <section className="container section-space home-cta-section">
        <div className="home-cta-card">
          <div className="cta-doodle" aria-hidden="true">✳</div>
          <span className="eyebrow">YOUR NEXT FAVOURITE IS WAITING</span>
          <h2>Let’s make something<br /><em>delicious.</em></h2>
          <p>Open the recipe box and find something that feels right for today.</p>
          <Link href="/recipes" className="button button-dark">Find a recipe <Icon name="arrow-up-right" size={17} /></Link>
        </div>
      </section>
    </>
  );
}
