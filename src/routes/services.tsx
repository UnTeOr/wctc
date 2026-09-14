import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Banknote, Gavel, HeartHandshake, Laptop, Megaphone, Network, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro, SectionHeading } from "@/components/site-shell";
import seedlings from "@/assets/wctc-seedlings.png.asset.json";

export const Route = createFileRoute("/services")({ head: () => ({ meta: [
  { title: "Nonprofit Services | WCTC" }, { name: "description", content: "Explore WCTC legal, fiscal, administrative, fundraising, and organizational support." },
  { property: "og:title", content: "Nonprofit Services | WCTC" }, { property: "og:description", content: "Practical infrastructure and guidance for social-good projects." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: ServicesPage });

const groups = [
  [HeartHandshake,"Fiscal sponsorship",["Tax exemption","Legal and financial sponsorship","Administrative management","Program development support"]],
  [Banknote,"Finance",["Financial reporting","Budget and cash flow management","Payroll and taxes"]],
  [Gavel,"Legal review",["Federal and state compliance","Contract and grant review","Specialist referrals","Spin-off support"]],
  [Laptop,"Information technology",["Donor and prospect CRM","Online donation integration","Domain, email, and website support"]],
  [Network,"Consulting",["Strategic planning","Board and leadership development","Capacity development","Advancement and funding"]],
  [Megaphone,"Digital marketing",["Social media","Messaging","Communications strategy"]],
  [Users,"Fundraising & people",["Grant and crowdfunding management","Prospect research","HR policy and payroll","Staff resolution and mediation"]],
] as const;

function ServicesPage() { return <>
  <PageIntro eyebrow="Services" title="Nonprofit support services for sponsored projects" copy="We provide legal, fiscal, administrative, and management services to nonprofit projects nationwide." image={seedlings.url} imageAlt="Hands planting seedlings in a nursery" />
  <section className="px-5 py-20 lg:px-10 lg:py-28"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="How we help">A solid foundation, tailored to your project.</SectionHeading><p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">Every sponsored project is different. We shape our support around your goals so you can develop new approaches to social change with confidence.</p><div className="mt-14 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">{groups.map(([Icon,title,items]) => <article key={title} className="bg-card p-8"><Icon className="size-6 text-primary"/><h2 className="mt-6 font-display text-2xl font-semibold">{title}</h2><ul className="mt-5 space-y-3">{items.map(item => <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-coral"/>{item}</li>)}</ul></article>)}</div></div></section>
  <section className="bg-secondary px-5 py-20 text-center lg:px-10"><div className="mx-auto max-w-2xl"><h2 className="font-display text-4xl font-semibold">Let’s build from the ground up.</h2><p className="mt-5 text-lg leading-8 text-muted-foreground">If you have a new approach to social change, we’d love to hear your vision.</p><Button asChild variant="coral" size="lg" className="mt-8"><Link to="/contact">Request a conversation <ArrowRight/></Link></Button></div></section>
  </>; }