import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Play, X, ArrowUpRight, Mail, Phone, Instagram, Linkedin, MessageCircle,
  Film, Palette, Sparkles, Share2, Bot, Target, ArrowDown,
} from "lucide-react";

import heroBg from "@/assets/hero-bg.jpg";
import portrait from "@/assets/portrait.jpg";
import reel1 from "@/assets/reel-1.jpg";
import reel2 from "@/assets/reel-2.jpg";
import reel3 from "@/assets/reel-3.jpg";
import reel4 from "@/assets/reel-4.jpg";
import d1 from "@/assets/design-1.jpg";
import d2 from "@/assets/design-2.jpg";
import d3 from "@/assets/design-3.jpg";
import d4 from "@/assets/design-4.jpg";
import d5 from "@/assets/design-5.jpg";
import d6 from "@/assets/design-6.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const ROLES = ["Video Editor", "Graphic Designer", "Social Media Manager", "Creative Strategist"];

const REELS = [
  { src: reel1, title: "Couture Editorial", brand: "Fashion / Luxury" },
  { src: reel2, title: "Cinematic Reel", brand: "Automotive" },
  { src: reel3, title: "Motion Typography", brand: "Brand Campaign" },
  { src: reel4, title: "Food Story", brand: "Hospitality" },
];

const DESIGNS = [
  { src: d1, h: "tall" },
  { src: d2, h: "short" },
  { src: d3, h: "short" },
  { src: d4, h: "med" },
  { src: d5, h: "tall" },
  { src: d6, h: "med" },
];

const BRANDS = [
  "VOGUE", "NIKE", "AUDI", "TANISHQ", "MYNTRA", "RAYMOND",
  "ZOMATO", "L'ORÉAL", "PUMA", "TATA", "BOAT", "MAMAEARTH",
];

const SERVICES = [
  { icon: Film, title: "Video Editing", desc: "Cinematic cuts, color grading and post production crafted to elevate every frame." },
  { icon: Palette, title: "Graphic Design", desc: "Brand identities, posters and digital design built with editorial precision." },
  { icon: Sparkles, title: "Motion Graphics", desc: "Kinetic typography and animated brand systems that command attention." },
  { icon: Share2, title: "Social Media Management", desc: "End-to-end content strategy and execution for performance driven brands." },
  { icon: Bot, title: "AI Video Creation", desc: "Next-generation visual storytelling powered by generative AI workflows." },
  { icon: Target, title: "Content Strategy", desc: "Data-led creative direction that turns audiences into loyal communities." },
];

const EXPERIENCE = [
  { company: "Gamoft Consultancy", role: "Creative Lead", year: "2024 — Present", desc: "Leading brand visual systems and AI-powered campaigns for global clients." },
  { company: "Love Chahal Digital Marketing", role: "Senior Video Editor", year: "2023 — 2024", desc: "Crafted performance reels and brand films generating multi-million views." },
  { company: "Reerocket", role: "Content Designer", year: "2022 — 2023", desc: "Built reel-first content strategies for D2C brands across India." },
  { company: "Rahe Solution", role: "Graphic Designer", year: "2021 — 2022", desc: "Designed identities and social systems for emerging digital businesses." },
];

const TOOLS = [
  "Adobe Premiere Pro", "After Effects", "Photoshop", "Canva", "Midjourney",
  "Sora", "HeyGen", "ElevenLabs", "ChatGPT", "Claude", "Gemini",
];

function Index() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <VideoShowcase />
      <DesignShowcase />
      <Brands />
      <Services />
      <Experience />
      <Tools />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 glass" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display text-lg tracking-wide">
          <span className="w-2 h-2 rounded-full bg-gold shadow-[0_0_20px_var(--gold)]" />
          <span>DKS<span className="text-gold">.</span></span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {[["Work", "#work"], ["Design", "#design"], ["Services", "#services"], ["Journey", "#experience"], ["Contact", "#contact"]].map(([l, h]) => (
            <a key={l} href={h} className="hover:text-foreground transition-colors relative group">
              {l}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
        <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-sm border border-gold/30 text-gold px-4 py-2 rounded-full hover:bg-gold hover:text-primary-foreground transition-all">
          Hire Me <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.nav>
  );
}

function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const i = setInterval(() => setRoleIdx((p) => (p + 1) % ROLES.length), 2400);
    return () => clearInterval(i);
  }, []);

  return (
    <section ref={ref} id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-60" width={1920} height={1280} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,oklch(0.74_0.13_85/0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </motion.div>

      {/* floating particles */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/40"
            style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 text-xs tracking-[0.3em] text-gold uppercase mb-8"
        >
          <span className="w-12 h-px bg-gold" />
          Creative Director · Est. 2021
        </motion.div>

        <h1 className="font-display font-black leading-[0.95] tracking-tight text-[clamp(2.5rem,8vw,7.5rem)]">
          {"DEEPAK KUMAR".split(" ").map((w, i) => (
            <motion.span
              key={w}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              {w}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="block text-gradient-gold italic font-medium"
          >
            Singh Surya
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-10 grid md:grid-cols-2 gap-10 items-end max-w-5xl"
        >
          <div>
            <div className="text-sm text-muted-foreground mb-2 tracking-widest uppercase">I work as a</div>
            <div className="h-12 overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIdx}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-2xl md:text-3xl font-display text-gold"
                >
                  {ROLES[roleIdx]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            Crafting visual stories that build powerful brands — for global creators, founders and culture-defining studios.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <a href="#work" className="group inline-flex items-center gap-3 bg-gold text-primary-foreground px-7 py-4 rounded-full font-medium hover:shadow-[var(--shadow-gold)] transition-all duration-300">
            View My Work
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </a>
          <a href="#contact" className="group inline-flex items-center gap-3 border border-foreground/20 px-7 py-4 rounded-full hover:border-gold hover:text-gold transition-all">
            Let's Work Together
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-muted-foreground tracking-widest"
      >
        <span>SCROLL</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ArrowDown className="w-4 h-4 text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="mb-16 max-w-3xl"
    >
      <div className="flex items-center gap-3 text-xs tracking-[0.3em] text-gold uppercase mb-5">
        <span className="w-8 h-px bg-gold" />
        {eyebrow}
      </div>
      <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">{title}</h2>
      <p className="mt-5 text-muted-foreground text-lg font-light">{sub}</p>
    </motion.div>
  );
}

function VideoShowcase() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="work" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Featured Video Projects"
          title="Short form content engineered for engagement."
          sub="Cinematic reels designed to convert attention into loyalty for premium brands worldwide."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {REELS.map((r, i) => (
            <motion.button
              key={i}
              onClick={() => setOpen(i)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden bg-card text-left"
            >
              <img src={r.src} alt={r.title} loading="lazy" width={576} height={1024} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 rounded-full glass-gold flex items-center justify-center">
                  <Play className="w-6 h-6 text-gold fill-gold ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-xs text-gold tracking-widest uppercase mb-1">{r.brand}</div>
                <div className="font-display text-lg">{r.title}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <button onClick={() => setOpen(null)} className="absolute top-6 right-6 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-gold hover:text-primary-foreground transition-all">
              <X className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-[9/16] h-[85vh] max-w-full rounded-2xl overflow-hidden"
            >
              <img src={REELS[open].src} alt="" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black to-transparent">
                <div className="text-xs text-gold tracking-widest uppercase mb-1">{REELS[open].brand}</div>
                <div className="font-display text-2xl">{REELS[open].title}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function DesignShowcase() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="design" className="relative py-32 px-6 bg-[oklch(0.11_0_0)]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Creative Design Projects"
          title="Brand visuals crafted for modern digital businesses."
          sub="Editorial design systems, campaign creatives and visual identities."
        />
        <div className="columns-2 md:columns-3 gap-5 [column-fill:_balance]">
          {DESIGNS.map((d, i) => (
            <motion.button
              key={i}
              onClick={() => setOpen(i)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="group block w-full mb-5 break-inside-avoid rounded-2xl overflow-hidden bg-card relative"
            >
              <img src={d.src} alt="" loading="lazy" className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${d.h === "tall" ? "aspect-[3/4]" : d.h === "med" ? "aspect-square" : "aspect-[4/3]"}`} />
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                <ArrowUpRight className="w-8 h-8 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <button onClick={() => setOpen(null)} className="absolute top-6 right-6 w-12 h-12 glass rounded-full flex items-center justify-center">
              <X className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              src={DESIGNS[open].src} alt="" className="max-h-[90vh] max-w-full rounded-xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Brands() {
  return (
    <section className="py-24 px-6 border-y border-border/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="text-xs tracking-[0.3em] text-gold uppercase mb-4">Brands I've Worked With</div>
          <h3 className="font-display text-3xl md:text-4xl">Trusted by category leaders</h3>
        </motion.div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-px bg-border/40">
          {BRANDS.map((b, i) => (
            <motion.div
              key={b}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="bg-background aspect-[3/2] flex items-center justify-center group hover:bg-card transition-all cursor-default"
            >
              <span className="font-display tracking-widest text-muted-foreground group-hover:text-gold transition-colors">{b}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="What I Do"
          title="A full-spectrum creative studio of one."
          sub="From concept to publish — visual systems built for premium brands."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative p-8 rounded-2xl bg-card border border-border/50 overflow-hidden hover:border-gold/40 transition-all duration-500"
              >
                <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_var(--x,50%)_0%,oklch(0.74_0.13_85/0.15),transparent_70%)]" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl glass-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-display text-2xl mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  <div className="mt-6 text-xs tracking-widest text-gold/0 group-hover:text-gold transition-all">0{i + 1} —</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-[oklch(0.11_0_0)] relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="The Journey"
          title="A timeline of craft and collaboration."
          sub="Four years of building visual brand systems for ambitious teams."
        />
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
          {EXPERIENCE.map((e, i) => (
            <motion.div
              key={e.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className={`relative mb-12 md:mb-20 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}
            >
              <div className="absolute left-4 md:left-auto top-6 w-3 h-3 rounded-full bg-gold shadow-[0_0_20px_var(--gold)] -translate-x-1/2 md:translate-x-0"
                style={i % 2 === 0 ? { right: "-6px" } : { left: "-6px" }} />
              <div className="ml-12 md:ml-0 p-7 rounded-2xl glass group hover:border-gold/30 transition-all">
                <div className="text-xs tracking-widest text-gold uppercase">{e.year}</div>
                <div className="font-display text-2xl mt-2">{e.company}</div>
                <div className="text-sm text-muted-foreground mt-1">{e.role}</div>
                <p className="text-sm text-muted-foreground/80 mt-4 leading-relaxed">{e.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tools() {
  const row = [...TOOLS, ...TOOLS];
  return (
    <section className="py-24 overflow-hidden border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="text-xs tracking-[0.3em] text-gold uppercase mb-3">Skills & Tools</div>
        <h3 className="font-display text-3xl md:text-4xl">The arsenal behind every frame.</h3>
      </div>
      <div className="relative">
        <div className="flex gap-4 animate-marquee whitespace-nowrap w-max">
          {row.map((t, i) => (
            <span key={i} className="px-7 py-3 rounded-full border border-border bg-card text-sm text-muted-foreground hover:text-gold hover:border-gold/40 transition-colors">
              {t}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}

function Contact() {
  const links = [
    { icon: Mail, label: "Email", value: "deepak.surya@studio.com", href: "mailto:deepak.surya@studio.com" },
    { icon: Phone, label: "Phone", value: "+91 98XXX XXXXX", href: "tel:+91" },
    { icon: Instagram, label: "Instagram", value: "@deepakkumarsurya", href: "#" },
    { icon: Linkedin, label: "LinkedIn", value: "in/deepakkumarsurya", href: "#" },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat directly", href: "#" },
  ];
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0.74_0.13_85/0.12),transparent_70%)]" />
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <div className="text-xs tracking-[0.3em] text-gold uppercase mb-5">Let's Create</div>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[1] tracking-tight">
              Got a story <span className="text-gradient-gold italic">worth</span> telling?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground font-light max-w-md">
              Available for select brand collaborations, retainer partnerships and creative direction projects.
            </p>
            <a href="mailto:deepak.surya@studio.com" className="mt-10 inline-flex items-center gap-3 bg-gold text-primary-foreground px-8 py-4 rounded-full font-medium hover:shadow-[var(--shadow-gold)] transition-all">
              Start a Project <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-3"
          >
            <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[4/5] max-w-sm">
              <img src={portrait} alt="Deepak Kumar Singh Surya" className="w-full h-full object-cover" loading="lazy" width={1024} height={1280} />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            </div>
            {links.map((l) => {
              const Icon = l.icon;
              return (
                <a key={l.label} href={l.href}
                  className="group flex items-center gap-4 p-5 rounded-xl glass hover:border-gold/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg glass-gold flex items-center justify-center">
                    <Icon className="w-4 h-4 text-gold" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground tracking-widest uppercase">{l.label}</div>
                    <div className="font-medium">{l.value}</div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-gold group-hover:rotate-45 transition-all" />
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Deepak Kumar Singh Surya. All rights reserved.</div>
        <div className="font-display tracking-wider">Crafted with intention<span className="text-gold">.</span></div>
      </div>
    </footer>
  );
}
