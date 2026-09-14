import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Sponsorship", to: "/sponsorship" },
  { label: "Ways to Give", to: "/ways-to-give" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">
          <Link to="/" className="group max-w-[245px] leading-tight sm:max-w-none" onClick={() => setOpen(false)}>
            <span className="block font-display text-[1.05rem] font-semibold text-foreground sm:text-xl">
              World Collaborative
            </span>
            <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-[0.68rem]">
              for Transformative Community
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`px-4 py-3 text-sm font-semibold transition-colors ${pathname === item.to ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>

        {open && (
          <nav className="border-t border-border bg-background px-5 py-4 lg:hidden" aria-label="Mobile navigation">
            <div className="mx-auto grid max-w-7xl">
              {navigation.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`border-b border-border/60 py-3 text-base font-semibold last:border-0 ${pathname === item.to ? "text-primary" : "text-foreground"}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>{children}</main>

      <footer className="border-t border-border bg-forest text-forest-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-10">
          <div>
            <p className="font-display text-2xl font-semibold">WCTC</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-forest-muted">
              Helping communities share resources, strengthen ideas, and create lasting social change.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-coral">Contact</p>
            <a className="mt-4 block text-sm hover:text-coral" href="mailto:jay@wc.tc">jay@wc.tc</a>
            <a className="mt-2 block text-sm hover:text-coral" href="tel:+14153235833">415-323-5833</a>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-coral">Mail</p>
            <p className="mt-4 text-sm leading-6 text-forest-muted">PO Box 20175<br />Stanford, CA 94309</p>
          </div>
        </div>
        <div className="border-t border-forest-line px-5 py-5 text-center text-xs text-forest-muted">
          © 2026 World Collaborative for Transformative Community · A spin-off of Community Life Network Inc.
        </div>
      </footer>
    </div>
  );
}

export function PageIntro({ eyebrow, title, copy, image, imageAlt }: { eyebrow: string; title: string; copy: string; image: string; imageAlt: string }) {
  return (
    <section className="relative isolate min-h-[55vh] overflow-hidden bg-forest text-forest-foreground">
      <img src={image} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover opacity-55" />
      <div className="absolute inset-0 bg-hero-wash" />
      <div className="relative mx-auto flex min-h-[55vh] max-w-7xl items-end px-5 pb-14 pt-28 lg:px-10 lg:pb-20">
        <div className="max-w-3xl animate-rise">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-coral">{eyebrow}</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.02] font-semibold sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-forest-soft sm:text-xl">{copy}</p>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, children }: { eyebrow?: string; children: ReactNode }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>}
      <h2 className="mt-3 font-display text-4xl leading-tight font-semibold sm:text-5xl">{children}</h2>
    </div>
  );
}

export function TextLink({ to, children }: { to: "/" | "/about" | "/services" | "/sponsorship" | "/ways-to-give" | "/contact"; children: ReactNode }) {
  return <Link to={to} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80">{children}<ArrowUpRight className="size-4" /></Link>;
}