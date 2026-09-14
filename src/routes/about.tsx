import { createFileRoute } from "@tanstack/react-router";
import { Globe2, HeartHandshake, Sprout } from "lucide-react";
import { PageIntro, SectionHeading } from "@/components/site-shell";
import forest from "@/assets/wctc-forest.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About WCTC | Our Mission and Story" },
    { name: "description", content: "Learn how WCTC connects people and resources to strengthen communities and social change." },
    { property: "og:title", content: "About WCTC | Our Mission and Story" },
    { property: "og:description", content: "A growing collective helping communities share resources and build lasting change." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: AboutPage,
});

function AboutPage() {
  return <>
    <PageIntro eyebrow="About WCTC" title="Change moves at the speed of trust." copy="We bring people and networks together to share resources, strengthen local leadership, and respond to the challenges facing our communities." image={forest.url} imageAlt="Sunlight filtering through a thriving forest" />
    <section className="px-5 py-20 lg:px-10 lg:py-28"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
      <SectionHeading eyebrow="Our mission">Community is our most renewable resource.</SectionHeading>
      <div className="space-y-6 text-lg leading-8 text-muted-foreground"><p>We are a group of individuals dedicated to making a difference by using existing networks to share resources. Our goal is to give community leaders more time to serve—and less time worrying about where support will come from.</p><p>When dispersed movements come together for the hardest challenges facing our planet and civilization, meaningful change can happen quickly.</p><p>Following a strategic initiative in 2015, Community LIFE Network began a spin-off process. The World Collaborative for Transformative Community was created in 2016 and received its 501(c)(3) IRS tax determination letter in 2017.</p></div>
    </div></section>
    <section className="bg-secondary px-5 py-20 lg:px-10"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Core values">How we show up.</SectionHeading><div className="mt-12 grid gap-6 md:grid-cols-3">{[[Globe2,"Shared stewardship","We approach today’s challenges as connected, collective responsibilities."],[HeartHandshake,"Mutual support","We build relationships grounded in trust, care, and practical help."],[Sprout,"Lasting growth","We invest in ideas and leaders that help communities flourish over time."]].map(([Icon,title,copy]) => { const ValueIcon = Icon as typeof Globe2; return <article key={title as string} className="border-t-2 border-primary pt-6"><ValueIcon className="size-6 text-primary"/><h3 className="mt-6 font-display text-2xl font-semibold">{title as string}</h3><p className="mt-3 leading-7 text-muted-foreground">{copy as string}</p></article>; })}</div></div></section>
  </>;
}