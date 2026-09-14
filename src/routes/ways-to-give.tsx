import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building, HandCoins, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro, SectionHeading } from "@/components/site-shell";
import world from "@/assets/wctc-world.png.asset.json";

export const Route = createFileRoute("/ways-to-give")({ head: () => ({ meta: [
  { title: "Ways to Give | Support WCTC" }, { name: "description", content: "Support WCTC and community-led projects through giving, partnership, and advocacy." }, { property: "og:title", content: "Ways to Give | Support WCTC" }, { property: "og:description", content: "Help community-centered projects access the support they need." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: GivePage });

function GivePage() { const ways = [[Heart,"Give to WCTC","Support the shared infrastructure that helps emerging projects become durable organizations."],[HandCoins,"Support a project","Direct your generosity toward a fiscally sponsored initiative aligned with your values."],[Building,"Partner with us","Create a philanthropic partnership that connects business resources with community leadership."],[Share2,"Share the mission","Introduce a changemaker, funder, or partner to WCTC and expand the circle of support."]] as const; return <>
  <PageIntro eyebrow="Ways to give" title="Ways to give and support community-led change" copy="Your support helps community leaders spend less time searching for infrastructure and more time delivering meaningful work." image={world.url} imageAlt="Earth viewed from space" />
  <section className="px-5 py-20 lg:px-10 lg:py-28"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Make an impact">Choose the way you want to show up.</SectionHeading><div className="mt-14 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">{ways.map(([Icon,title,copy])=><article key={title} className="bg-card p-8 lg:p-10"><Icon className="size-7 text-coral"/><h2 className="mt-7 font-display text-3xl font-semibold">{title}</h2><p className="mt-4 max-w-lg leading-7 text-muted-foreground">{copy}</p></article>)}</div></div></section>
  <section className="bg-secondary px-5 py-20 text-center lg:px-10"><div className="mx-auto max-w-2xl"><h2 className="font-display text-4xl font-semibold">Start with a conversation.</h2><p className="mt-5 text-lg leading-8 text-muted-foreground">Tell us what kind of impact you want to make, and we’ll help identify the right path.</p><Button asChild variant="coral" size="lg" className="mt-8"><Link to="/contact">Contact WCTC <ArrowRight/></Link></Button></div></section>
  </>; }