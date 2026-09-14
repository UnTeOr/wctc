import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro, SectionHeading } from "@/components/site-shell";
import forest from "@/assets/wctc-forest.png.asset.json";

export const Route = createFileRoute("/contact")({ head: () => ({ meta: [
  { title: "Contact WCTC | Start a Conversation" }, { name: "description", content: "Contact WCTC about fiscal sponsorship, nonprofit support, giving, or partnerships." }, { property: "og:title", content: "Contact WCTC | Start a Conversation" }, { property: "og:description", content: "Ready to take your social-good project to the next level? Contact WCTC." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: ContactPage });

function ContactPage() { return <>
  <PageIntro eyebrow="Contact" title="Let’s move your idea forward." copy="Ready to take your project to the next level? Tell us where you are and where you hope to go." image={forest.url} imageAlt="Sunlight entering a green forest" />
  <section className="px-5 py-20 lg:px-10 lg:py-28"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.9fr]">
    <div><SectionHeading eyebrow="Reach out">A first conversation can open new possibilities.</SectionHeading><p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">Contact us about fiscal sponsorship, nonprofit services, giving, or a possible partnership. We’ll help you understand the next step.</p><div className="mt-9"><Button asChild variant="coral" size="lg"><a href="mailto:jay@wc.tc?subject=WCTC inquiry"><Mail/>Email WCTC</a></Button></div></div>
    <address className="not-italic"><div className="space-y-px overflow-hidden rounded-md border border-border bg-border"><a href="mailto:jay@wc.tc" className="flex items-center gap-5 bg-card p-7 transition-colors hover:bg-secondary"><Mail className="size-6 text-primary"/><div><p className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">Email</p><p className="mt-1 font-semibold">jay@wc.tc</p></div></a><a href="tel:+14153235833" className="flex items-center gap-5 bg-card p-7 transition-colors hover:bg-secondary"><Phone className="size-6 text-primary"/><div><p className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">Phone</p><p className="mt-1 font-semibold">415-323-5833</p></div></a><div className="flex items-center gap-5 bg-card p-7"><MapPin className="size-6 text-primary"/><div><p className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">Mailing address</p><p className="mt-1 font-semibold">PO Box 20175<br/>Stanford, CA 94309</p></div></div></div></address>
  </div></section>
  </>; }