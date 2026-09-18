import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Handshake, Network } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading, TextLink } from "@/components/site-shell";
import seedlings from "@/assets/wctc-seedlings.png.asset.json";
import collaboration from "@/assets/wctc-collaboration.png.asset.json";
import growth from "@/assets/wctc-growth.png.asset.json";
import world from "@/assets/wctc-world.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "WCTC | Transforming Communities Together" },
    { name: "description", content: "WCTC brings people and networks together to share resources, strengthen local leadership, and build stronger communities." },
    { property: "og:title", content: "WCTC | Transforming Communities Together" },
    { property: "og:description", content: "We bring people and networks together to share resources, strengthen local leadership, and respond to the challenges facing our communities." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HomePage,
});

const pillars = [
  { icon: Network, title: "Connect", copy: "We provide the administrative backbone so community leaders can focus on creating social impact." },
  { icon: Building2, title: "Build capacity", copy: "Shared exempt status and organizational infrastructure help programs stay focused on their mission." },
  { icon: Handshake, title: "Collaborate cross-sector", copy: "We help forge philanthropic partnerships with funders and businesses for sustainable impact." },
];

function HomePage() {
  return <>
    <section className="relative isolate min-h-[calc(100vh-5rem)] overflow-hidden bg-forest text-forest-foreground">
      <img src={seedlings.url} alt="Hands planting young seedlings" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-hero-wash" />
      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-5 py-20 lg:px-10">
        <div className="max-w-3xl animate-rise">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">Established 2016 · 501(c)(3)</p>
          <h1 className="mt-5 font-display text-5xl leading-[0.98] font-semibold sm:text-7xl lg:text-8xl">Collaboration for community service organizations and social good.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-forest-soft sm:text-xl">We bring people and networks together to share resources, strengthen local leadership, and respond to the challenges facing our communities.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="coral" size="lg"><Link to="/sponsorship">Explore sponsorship <ArrowRight /></Link></Button>
            <Button asChild variant="outline" size="lg" className="border-forest-muted bg-forest/40 text-forest-foreground hover:bg-forest hover:text-forest-foreground"><Link to="/about">Our story</Link></Button>
          </div>
        </div>
      </div>
    </section>

    <section className="px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="What we do">A home for people working toward a better world.</SectionHeading>
        <div className="mt-14 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, copy }, index) => <article key={title} className="bg-card p-8 lg:p-10">
            <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-primary"><Icon className="size-5" /></span>
            <p className="mt-10 text-xs font-bold text-muted-foreground">0{index + 1}</p>
            <h3 className="mt-3 font-display text-3xl font-semibold">{title}</h3>
            <p className="mt-4 leading-7 text-muted-foreground">{copy}</p>
            <TextLink to="/services">Learn more</TextLink>
          </article>)}
        </div>
      </div>
    </section>

    <section className="bg-secondary px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <img src={collaboration.url} alt="Community members joining hands" className="aspect-[4/3] h-full w-full rounded-md object-cover" />
        <div><SectionHeading eyebrow="Fiscal sponsorship">Put your energy where it matters most.</SectionHeading><p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">Are you working on a project for the betterment of society? We offer start-up resources and services so you can concentrate on your cause.</p><TextLink to="/sponsorship">See how it works</TextLink></div>
      </div>
    </section>

    <section className="grid lg:grid-cols-2">
      <div className="flex items-center bg-forest px-5 py-20 text-forest-foreground lg:px-16"><div className="max-w-xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Our mission</p><blockquote className="mt-5 font-display text-4xl leading-tight sm:text-5xl">“Help our communities network together and find solutions to overcome the problems of the 21st century.”</blockquote><TextLink to="/about">Meet WCTC</TextLink></div></div>
      <img src={growth.url} alt="A young plant held carefully in two hands" className="min-h-[420px] h-full w-full object-cover" />
    </section>

    <section className="relative isolate overflow-hidden px-5 py-24 text-center text-forest-foreground lg:px-10">
      <img src={world.url} alt="Earth viewed from space" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-forest/75" />
      <div className="relative mx-auto max-w-2xl"><h2 className="font-display text-4xl font-semibold sm:text-5xl">Bring your vision to life.</h2><p className="mt-5 text-lg leading-8 text-forest-soft">Let’s talk about the support your community-centered project needs.</p><Button asChild variant="coral" size="lg" className="mt-8"><Link to="/contact">Start a conversation <ArrowRight /></Link></Button></div>
    </section>
  </>;
}