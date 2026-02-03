import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Utensils,
  Pill,
  Truck,
  Building2,
  HeartPulse,
  BadgeCheck,
  ChevronDown,
} from "lucide-react";

// Single-file marketing site for a Healthy Food + OTC Medication Vending business.
// ✅ Tailwind classes only (no extra CSS)
// ✅ Mobile-first, responsive
// ✅ Update brand name + contact info in BRAND + CONTACT blocks
// ✅ Replace logoSrc with your uploaded logo path

const BRAND = {
  name: "Elite Markets",
  tagline: "Healthy food + over-the-counter essentials, right where people need them.",
  subtagline:
    "Modern vending solutions for workplaces, gyms, apartments, and high-traffic locations.",
  // Replace with your logo file path (e.g. /elite-markets-logo.png)
  logoSrc: "/Untitled design (3) (1).png",
};

const CONTACT = {
  phone: "(341) 215-6390",
  email: "elite_markets@myyahoo.com",
  serviceArea: "Bay Area, CA",
};

const NAV = [
  { label: "Home", id: "top" },
  { label: "Products", id: "products" },
  { label: "Locations", id: "locations" },
  { label: "How it works", id: "how" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "contact" },
];

const PRODUCTS = {
  "Healthy Snacks": [
    "RXBars",
    "Kind Bars",
    "Clif Bars",
    "Fruit cups",
    "Veggie chips",
    "Kale chips",
    "Sweet potato chips",
    "Plain & lightly salted almonds, cashews, sunflower seeds",
    "Beef & turkey jerky",
    "Trail mix",
    "Lightly salted popcorn",
    "Fruit snacks",
    "High protein cookies",
  ],
  "Fresh Food": [
    "Salads",
    "Sandwich wraps",
    "Whole fruit: apples, bananas, oranges",
    "Hummus & pretzel packs",
    "Yogurt cups",
  ],
  "Better Drinks": [
    "V8",
    "Coconut water",
    "Zoa",
    "Kombucha drinks",
    "Matcha latte",
    "Alani",
    "Sparkling water",
    "Bloom",
    "Premier protein shakes",
    "Smartwater",
    "Quest",
    "Recovery sports drink",
  ],
  "OTC Medication": [
    "Benadryl (allergy)",
    "Advil congestion & pain",
    "Advil migraine",
    "DayQuil cold & flu",
    "Non-drowsy allergy relief",
    "Ibuprofen",
    "Advil Liqui-Gels minis",
    "Acetaminophen",
    "Cold & HBP acetaminophen",
    "Excedrin migraine relief",
    "Low-dose aspirin",
  ],
  "Relievers": [
    "Pepto-Bismol",
    "Orajel",
    "Pepcid AC",
    "Gas-X",
    "Alka-Seltzer",
    "IcyHot",
    "Chloraseptic sore throat",
    "Itch reliever",
    "Urinary pain relief",
    "Imodium",
    "Kaopectate",
  ],
  "Kids & Family": [
    "Children's ibuprofen",
    "Diapers",
    "Toddler wipes",
    "Children's sunscreen",
    "Diaper rash cream",
    "Children's Benadryl",
    "Children's Advil",
    "Children's Tylenol",
    "Children's allergy",
  ],
  "Personal Care": [
    "Vitamin C",
    "Panty liners",
    "Nasal spray",
    "Tampons",
    "Opti-Free Puremoist",
    "Moisturizer",
    "Robitussin",
    "Neosporin",
    "Eye drops",
  ],
  "Forgotten Items": [
    "Towels",
    "Headsets",
    "Deodorant",
    "Resistance bands",
    "Body wipes",
    "Mouthwash",
    "Sunscreen",
    "Cooling after-sun gel",
    "Speed stick",
    "Antacid",
    "Soap",
    "Gel",
    "Hand sanitizer",
    "Antibacterial wipes",
    "Hair ties",
    "Floss",
    "Masks",
    "Lip balm",
    "Band-aids",
    "Off bug spray",
    "Antiseptic wipes",
    "Nexium",
  ],
};

const TRUST_BADGES = [
  {
    icon: ShieldCheck,
    title: "Safe, compliant operations",
    desc: "We follow best practices for stocking, labeling, and responsible vending — especially for OTC items.",
  },
  {
    icon: Sparkles,
    title: "Clean, modern machines",
    desc: "A sleek experience with digital payment options and clear product visibility.",
  },
  {
    icon: Truck,
    title: "Reliable restocking",
    desc: "Scheduled refills + rapid response when inventory runs low.",
  },
];

const LOCATIONS = [
  {
    icon: Building2,
    title: "Offices & campuses",
    bullets: ["Breakrooms", "Lobbies", "24/7 access"],
  },
  {
    icon: HeartPulse,
    title: "Gyms & wellness studios",
    bullets: ["Post-workout snacks", "Hydration", "Forgotten essentials"],
  },
  {
    icon: BadgeCheck,
    title: "Apartments & hotels",
    bullets: ["Late-night convenience", "Family items", "Guest essentials"],
  },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function PillBadge({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-yellow-400/30 bg-black/70 px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm backdrop-blur">
      <Check className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}

function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8 md:mb-10">
          {eyebrow ? (
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-500">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-2xl font-semibold tracking-tight text-yellow-400 md:text-3xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-2 max-w-3xl text-yellow-200/80">{subtitle}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

function Card({ children, className }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-yellow-400/30 bg-black shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

function Button({ children, onClick, href, variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-zinc-900/10";
  const styles = {
    primary:
      "bg-yellow-400 text-black shadow-sm hover:bg-zinc-800 active:bg-yellow-400",
    secondary:
      "border border-yellow-400/30 bg-black text-yellow-400 hover:bg-zinc-50 active:bg-black",
    ghost: "text-yellow-400 hover:bg-zinc-100",
  };

  const className = cn(base, styles[variant]);

  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick} type="button">
      {children}
    </button>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-yellow-400/30 bg-black/70 p-4 shadow-sm backdrop-blur">
      <div className="text-xl font-semibold text-yellow-400">{value}</div>
      <div className="mt-1 text-sm text-yellow-200/80">{label}</div>
    </div>
  );
}

function FAQItem({ q, a, open, onToggle }) {
  return (
    <Card className="overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-3 p-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-yellow-400">{q}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-zinc-500 transition",
            open ? "rotate-180" : "rotate-0"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="border-t border-yellow-400/30 p-5 text-sm text-yellow-200/80">
              {a}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Card>
  );
}

export default function EliteMarketsSite() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);

  const productSections = useMemo(() => Object.entries(PRODUCTS), []);

  return (
    <div className="min-h-screen bg-black text-black">
      {/* Top */}
      <div id="top" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-yellow-400/30 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <button
            type="button"
            onClick={() => scrollToId("top")}
            className="flex items-center gap-3"
            aria-label={`${BRAND.name} home`}
          >
            <div className="h-9 w-9 overflow-hidden rounded-2xl border border-yellow-400/30 bg-black shadow-sm">
              {/* Replace src to your uploaded logo path */}
              <img
                src={BRAND.logoSrc}
                alt={`${BRAND.name} logo`}
                className="h-full w-full object-contain"
                onError={(e) => {
                  // Fallback if logo path isn't set yet
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-zinc-500">
                EM
              </div>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">{BRAND.name}</div>
              <div className="text-xs text-zinc-500">Healthy vending + OTC</div>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <button
                key={n.id}
                type="button"
                onClick={() => scrollToId(n.id)}
                className="rounded-2xl px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
              >
                {n.label}
              </button>
            ))}
            <div className="ml-2">
              <Button onClick={() => scrollToId("contact")}>Get a quote</Button>
            </div>
          </nav>

          {/* Mobile */}
          <div className="md:hidden">
            <Button
              variant="secondary"
              onClick={() => setMobileOpen((v) => !v)}
            >
              Menu
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="border-t border-yellow-400/30 bg-black"
            >
              <div className="mx-auto max-w-6xl px-4 py-3 md:px-6">
                <div className="grid gap-1">
                  {NAV.map((n) => (
                    <button
                      key={n.id}
                      type="button"
                      onClick={() => {
                        scrollToId(n.id);
                        setMobileOpen(false);
                      }}
                      className="rounded-2xl px-3 py-2 text-left text-sm font-medium text-zinc-700 hover:bg-zinc-100"
                    >
                      {n.label}
                    </button>
                  ))}
                  <div className="pt-2">
                    <Button
                      onClick={() => {
                        scrollToId("contact");
                        setMobileOpen(false);
                      }}
                    >
                      Get a quote <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      {/* Hero */}
      <main>
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="flex flex-wrap gap-2">
                    <PillBadge>Healthy snacks</PillBadge>
                    <PillBadge>Fresh food</PillBadge>
                    <PillBadge>OTC essentials</PillBadge>
                    <PillBadge>24/7 convenience</PillBadge>
                  </div>
                  <h1 className="mt-5 text-3xl font-semibold tracking-tight text-yellow-400 md:text-5xl">
                    {BRAND.tagline}
                  </h1>
                  <p className="mt-4 max-w-xl text-yellow-200/80 md:text-lg">
                    {BRAND.subtagline}
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button onClick={() => scrollToId("contact")}>
                      Request placement <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => scrollToId("products")}
                    >
                      See product list
                    </Button>
                  </div>

                  <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    <Stat value="Cashless" label="Tap + card payments" />
                    <Stat value="Clean" label="Modern machine design" />
                    <Stat value="Fast" label="Restocking & support" />
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3 text-sm text-yellow-200/80">
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="h-4 w-4" /> {CONTACT.serviceArea}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Phone className="h-4 w-4" /> {CONTACT.phone}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Mail className="h-4 w-4" /> {CONTACT.email}
                    </span>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.05 }}
              >
                <Card className="relative overflow-hidden">
                  <div className="p-6 md:p-7">
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl bg-yellow-400 p-3 text-black shadow-sm">
                        <Utensils className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">Healthy food vending</div>
                        <div className="text-sm text-yellow-200/80">
                          Snacks, meals, drinks — curated.
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center gap-3">
                      <div className="rounded-2xl bg-yellow-400 p-3 text-black shadow-sm">
                        <Pill className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">
                          OTC medication & essentials
                        </div>
                        <div className="text-sm text-yellow-200/80">
                          Relief items, personal care, family needs.
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {TRUST_BADGES.map((b) => (
                        <div
                          key={b.title}
                          className="rounded-2xl border border-yellow-400/30 bg-black p-4"
                        >
                          <div className="flex items-center gap-2">
                            <b.icon className="h-4 w-4 text-zinc-700" />
                            <div className="text-sm font-semibold">{b.title}</div>
                          </div>
                          <p className="mt-2 text-sm text-yellow-200/80">{b.desc}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-zinc-50 p-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 rounded-xl bg-black p-2 shadow-sm">
                          <ShieldCheck className="h-4 w-4 text-zinc-800" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold">Note on OTC items</div>
                          <p className="mt-1 text-sm text-yellow-200/80">
                            Product availability may vary by location and local requirements.
                            We can tailor the mix to your site and audience.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-yellow-400/5" />
                  <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-yellow-400/5" />
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Products */}
        <Section
          id="products"
          eyebrow="Inventory"
          title="Product categories"
          subtitle="A sample list of what we stock. Want specific brands or dietary options? We can customize." 
        >
          <div className="grid gap-4 md:grid-cols-2">
            {productSections.map(([category, items]) => (
              <Card key={category} className="overflow-hidden">
                <div className="flex items-center justify-between gap-3 border-b border-yellow-400/30 p-5">
                  <div className="flex items-center gap-2">
                    {category.includes("OTC") || category === "Relievers" ? (
                      <Pill className="h-4 w-4" />
                    ) : category.includes("Food") ? (
                      <Utensils className="h-4 w-4" />
                    ) : category.includes("Kids") || category.includes("Family") ? (
                      <HeartPulse className="h-4 w-4" />
                    ) : (
                      <Sparkles className="h-4 w-4" />
                    )}
                    <div className="font-semibold">{category}</div>
                  </div>
                  <span className="text-xs text-zinc-500">{items.length} items</span>
                </div>
                <div className="p-5">
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-sm text-zinc-700">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700">
                      Gluten-free options
                    </span>
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700">
                      High-protein
                    </span>
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700">
                      Low sugar
                    </span>
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700">
                      Family essentials
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Locations */}
        <Section
          id="locations"
          eyebrow="Placement"
          title="Great fits for these locations"
          subtitle="We help you choose the right machine and product mix for your space." 
        >
          <div className="grid gap-4 md:grid-cols-3">
            {LOCATIONS.map((l) => (
              <Card key={l.title}>
                <div className="p-5">
                  <div className="flex items-center gap-2">
                    <div className="rounded-2xl bg-yellow-400 p-3 text-black shadow-sm">
                      <l.icon className="h-5 w-5" />
                    </div>
                    <div className="font-semibold">{l.title}</div>
                  </div>
                  <ul className="mt-4 grid gap-2 text-sm text-zinc-700">
                    {l.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 text-zinc-700" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Card>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  <div className="font-semibold">What you get</div>
                </div>
                <ul className="mt-4 grid gap-2 text-sm text-zinc-700">
                  {["Machine placement & setup", "Cashless payments", "Restocking & rotation", "Service & support"].map(
                    (x) => (
                      <li key={x} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4" />
                        <span>{x}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5" />
                  <div className="font-semibold">A better vending experience</div>
                </div>
                <p className="mt-3 text-sm text-yellow-200/80">
                  We focus on “grab-and-go” options people actually want — with a clean layout,
                  clear pricing, and dependable restocks.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Healthy-first", "Transparent", "Responsive"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-yellow-400/30 bg-black px-3 py-1 text-xs text-zinc-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </Section>

        {/* How it works */}
        <Section
          id="how"
          eyebrow="Process"
          title="How it works"
          subtitle="Simple, fast, and tailored to your space." 
        >
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Tell us about your location",
                desc: "Foot traffic, hours, and who you want to serve (employees, residents, guests).",
                icon: MapPin,
              },
              {
                step: "02",
                title: "We recommend a setup",
                desc: "Machine type + curated product mix (healthy snacks/food + OTC essentials).",
                icon: Sparkles,
              },
              {
                step: "03",
                title: "We place, stock, and maintain",
                desc: "We keep it filled, clean, and running — with support when you need it.",
                icon: Truck,
              },
            ].map((s) => (
              <Card key={s.step}>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-semibold text-zinc-500">STEP {s.step}</div>
                    <div className="rounded-2xl bg-yellow-400 p-3 text-black shadow-sm">
                      <s.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="mt-4 text-lg font-semibold">{s.title}</div>
                  <p className="mt-2 text-sm text-yellow-200/80">{s.desc}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-black p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-lg font-semibold">Ready to place a machine?</div>
                <p className="mt-1 text-sm text-yellow-200/80">
                  Share your location details and we’ll respond with a recommendation and quote.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button onClick={() => scrollToId("contact")}>
                  Request placement <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="secondary" onClick={() => scrollToId("products")}>
                  Browse products
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* FAQ */}
        <Section
          id="faq"
          eyebrow="Questions"
          title="FAQ"
          subtitle="Answers to the most common questions we get." 
        >
          <div className="grid gap-3">
            {[
              {
                q: "Do you customize products for my location?",
                a: "Yes. We can tailor the mix based on your audience (office, gym, apartment, hotel) and preferences like high-protein, low sugar, vegan-friendly, and more.",
              },
              {
                q: "How do OTC items work in a vending machine?",
                a: "We stock common over-the-counter items people need fast (allergy, pain, stomach relief, personal care). Availability and placement can vary by location and local requirements, and we’ll tailor accordingly.",
              },
              {
                q: "How often do you restock?",
                a: "It depends on foot traffic. Most sites do weekly or bi-weekly restocks. We also adjust based on sales patterns so popular items stay in stock.",
              },
              {
                q: "Do you offer cashless payments?",
                a: "Yes — tap, chip, and swipe options. If you want a specific payment setup, tell us and we’ll match it.",
              },
              {
                q: "How do I get started?",
                a: "Send your location details (address/city, type of site, approximate traffic, preferred products). We’ll reply with a recommended setup and next steps.",
              },
            ].map((item, idx) => (
              <FAQItem
                key={item.q}
                q={item.q}
                a={item.a}
                open={faqOpen === idx}
                onToggle={() => setFaqOpen((v) => (v === idx ? -1 : idx))}
              />
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section
          id="contact"
          eyebrow="Contact"
          title="Request placement or a quote"
          subtitle="Tell us where you want the machine and what you’d like to stock. We’ll reply with a recommended setup." 
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <div className="font-semibold">Send a message</div>
                </div>
                <p className="mt-2 text-sm text-yellow-200/80">
                  This form is a front-end template. Connect it to your email service or
                  website backend to receive submissions.
                </p>

                <form
                  className="mt-5 grid gap-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.location.href = `mailto:${CONTACT.email}?subject=Elite Markets Placement Request&body=Name:%20${encodeURIComponent(e.target[0].value)}%0APhone:%20${encodeURIComponent(e.target[1].value)}%0AEmail:%20${encodeURIComponent(e.target[2].value)}%0ALocation:%20${encodeURIComponent(e.target[3].value)}`;
                  }}
                >
                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="grid gap-1">
                      <span className="text-xs font-semibold text-zinc-700">Name</span>
                      <input
                        required
                        className="h-10 rounded-2xl border border-yellow-400/30 bg-black px-3 text-sm outline-none focus:ring-2 focus:ring-zinc-900/10"
                        placeholder="Your name"
                      />
                    </label>
                    <label className="grid gap-1">
                      <span className="text-xs font-semibold text-zinc-700">Phone</span>
                      <input
                        className="h-10 rounded-2xl border border-yellow-400/30 bg-black px-3 text-sm outline-none focus:ring-2 focus:ring-zinc-900/10"
                        placeholder="(###) ###-####"
                      />
                    </label>
                  </div>

                  <label className="grid gap-1">
                    <span className="text-xs font-semibold text-zinc-700">Email</span>
                    <input
                      required
                      type="email"
                      className="h-10 rounded-2xl border border-yellow-400/30 bg-black px-3 text-sm outline-none focus:ring-2 focus:ring-zinc-900/10"
                      placeholder="you@company.com"
                    />
                  </label>

                  <label className="grid gap-1">
                    <span className="text-xs font-semibold text-zinc-700">
                      Location details
                    </span>
                    <textarea
                      required
                      rows={5}
                      className="rounded-2xl border border-yellow-400/30 bg-black px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900/10"
                      placeholder="City/address (or cross streets), type of site (office/gym/apartment), hours, approximate daily traffic, and any product preferences."
                    />
                  </label>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Button>
                      Submit <ArrowRight className="h-4 w-4" />
                    </Button>
                    <div className="text-xs text-zinc-500">
                      Or email us directly at <span className="font-semibold">{CONTACT.email}</span>
                    </div>
                  </div>
                </form>
              </div>
            </Card>

            <div className="grid gap-4">
              <Card>
                <div className="p-6">
                  <div className="text-sm font-semibold">Direct contact</div>
                  <div className="mt-4 grid gap-3 text-sm text-zinc-700">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>{CONTACT.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>{CONTACT.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{CONTACT.serviceArea}</span>
                    </div>
                  </div>

                  <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-zinc-50 p-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-xl bg-black p-2 shadow-sm">
                        <ShieldCheck className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">Compliance & care</div>
                        <p className="mt-1 text-sm text-yellow-200/80">
                          We take product handling seriously, especially with OTC items.
                          We can align inventory with your location’s needs and constraints.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="p-6">
                  <div className="text-sm font-semibold">What to include in your request</div>
                  <ul className="mt-4 grid gap-2 text-sm text-zinc-700">
                    {["Your city or address", "Type of location", "Hours/access", "Estimated traffic", "Must-have products"].map(
                      (x) => (
                        <li key={x} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4" />
                          <span>{x}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="border-t border-yellow-400/30 bg-black">
          <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-2xl border border-yellow-400/30 bg-black shadow-sm">
                    <img
                      src={BRAND.logoSrc}
                      alt=""
                      className="h-full w-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-zinc-500">
                      EM
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{BRAND.name}</div>
                    <div className="text-xs text-zinc-500">Healthy vending + OTC essentials</div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-yellow-200/80">
                  Convenient, curated vending solutions — stocked with better choices and everyday relief.
                </p>
              </div>

              <div>
                <div className="text-sm font-semibold">Quick links</div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                  {NAV.map((n) => (
                    <button
                      key={n.id}
                      type="button"
                      onClick={() => scrollToId(n.id)}
                      className="text-left text-zinc-700 hover:text-yellow-400"
                    >
                      {n.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold">Contact</div>
                <div className="mt-3 grid gap-2 text-sm text-zinc-700">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" /> {CONTACT.phone}
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" /> {CONTACT.email}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> {CONTACT.serviceArea}
                  </div>
                </div>
                <div className="mt-4">
                  <Button onClick={() => scrollToId("contact")}>Get a quote</Button>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-yellow-400/30 pt-6 text-xs text-zinc-500 md:flex-row md:items-center">
              <div>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5" /> Responsible vending
                </span>
                <span className="inline-flex items-center gap-1">
                  <Sparkles className="h-3.5 w-3.5" /> Curated inventory
                </span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );


