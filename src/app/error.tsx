"use client";

import Icon from "@/components/ui/Icon";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="container not-found-page">
      <span className="eyebrow">A SMALL KITCHEN PAUSE</span>
      <h1>Something went<br /><em>a little off-menu.</em></h1>
      <p>We couldn’t load this page properly. Give it another try and we’ll get you back to the good stuff.</p>
      <button type="button" className="button button-dark" onClick={() => reset()}>Try again <Icon name="arrow-right" size={17} /></button>
    </div>
  );
}
