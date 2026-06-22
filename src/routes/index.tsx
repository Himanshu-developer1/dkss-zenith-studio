import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Play, X, ArrowUpRight, Mail, Phone, Instagram, Linkedin, MessageCircle,
  Film, Palette, Sparkles, Share2, Bot, Target, ArrowDown, Heart, MessageSquare, Send, Bookmark, MoreHorizontal, Volume2,
} from "lucide-react";

import heroBg from "@/assets/hero-bg.jpg";
import portrait from "@/assets/portrait.jpg";
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
  {
    category: "Fashion Reel",
    client: "Sultana × Ash Cult",
    caption: "Editorial drop — runway cuts, beat-matched transitions",
    views: "1.2M",
    likes: "84.3K",
    hashtag: "#FashionReel",
    gradient: "from-[#2a1810] via-[#3d1f1a] to-[#0b0b0b]",
    accent: "#E8B4A0",
    emoji: "👗",
  },
  {
    category: "Brand Advertisement",
    client: "Godrej Riverine",
    caption: "Launch film — cinematic establishing shots, voiceover edit",
    views: "847K",
    likes: "62.1K",
    hashtag: "#BrandFilm",
    gradient: "from-[#1a1f2e] via-[#0f1a2e] to-[#0b0b0b]",
    accent: "#9DB4D4",
    emoji: "🏙",
  },
  {
    category: "Product Reel",
    client: "Boho Fest Merch",
    caption: "Hero product spotlight — macro shots, kinetic text",
    views: "534K",
    likes: "41.7K",
    hashtag: "#ProductDrop",
    gradient: "from-[#2a1a2e] via-[#1f1430] to-[#0b0b0b]",
    accent: "#C9A227",
    emoji: "✨",
  },
  {
    category: "Restaurant Reel",
    client: "House of Chettinad",
    caption: "Plating sequence — slow-mo pours, ASMR cuts",
    views: "2.1M",
    likes: "156K",
    hashtag: "#FoodReel",
    gradient: "from-[#2e1a0f] via-[#3d2410] to-[#0b0b0b]",
    accent: "#E8B547",
    emoji: "🍛",
  },
  {
    category: "Social Media Campaign",
    client: "Barista India",
    caption: "Weekly content series — 30 reels, unified visual system",
    views: "3.4M",
    likes: "241K",
    hashtag: "#CampaignEdit",
    gradient: "from-[#1f2a1a] via-[#142010] to-[#0b0b0b]",
    accent: "#B8D4A0",
    emoji: "☕",
  },
  {
    category: "AI Generated Reel",
    client: "Desi Comedy Club",
    caption: "Sora + Midjourney pipeline — surreal sketch promo",
    views: "1.8M",
    likes: "203K",
    hashtag: "#AIReel",
    gradient: "from-[#1a1a2e] via-[#2a1f3d] to-[#0b0b0b]",
    accent: "#D4A0E8",
    emoji: "🤖",
  },
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
  "Barista",
  "LevelUp Hotels",
  "House of Chettinad",
  "Desi Comedy Club",
  "Sultana",
  "Ash Cult",
  "Boho Fest",
  "Godrej Riverine",
  "Rishita Developers",
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
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </motion.div>

      {/* animated cinematic background "video" — drifting gold light blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-1/3 -left-1/4 w-[80vw] h-[80vw] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, oklch(0.74 0.13 85 / 0.28), transparent 60%)" }}
          animate={{ x: [0, 80, -40, 0], y: [0, 60, -30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/4 -right-1/4 w-[70vw] h-[70vw] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle, oklch(0.55 0.18 30 / 0.22), transparent 60%)" }}
          animate={{ x: [0, -60, 40, 0], y: [0, -40, 50, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 w-[60vw] h-[60vw] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, oklch(0.85 0.16 90 / 0.18), transparent 60%)" }}
          animate={{ x: [0, 40, -50, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* scanline / grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 3px)",
          }}
        />
      </div>

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
          Creative Storyteller • Digital Creator
          <span className="w-12 h-px bg-gold/40" />
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
          eyebrow="Creator Portfolio — Reels"
          title="Real client work, edited for the scroll."
          sub="A snapshot of reels I've cut, color graded and published — across fashion, hospitality, brand and AI-driven campaigns."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REELS.map((r, i) => (
            <motion.button
              key={i}
              onClick={() => setOpen(i)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -10 }}
              className="group relative aspect-[9/16] rounded-[28px] overflow-hidden text-left border border-white/5 shadow-2xl"
            >
              {/* Reel background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${r.gradient}`} />
              <div
                className="absolute inset-0 opacity-40 mix-blend-screen"
                style={{
                  backgroundImage: `radial-gradient(circle at 30% 20%, ${r.accent}55, transparent 60%), radial-gradient(circle at 70% 80%, ${r.accent}33, transparent 55%)`,
                }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(transparent_0,rgba(0,0,0,0.55)_100%)]" />

              {/* Top IG bar */}
              <div className="absolute top-0 inset-x-0 p-4 flex items-center justify-between text-white/90 text-xs">
                <div className="flex items-center gap-2">
                  <Instagram className="w-4 h-4" />
                  <span className="font-medium tracking-wide">Reels</span>
                </div>
                <Volume2 className="w-4 h-4" />
              </div>

              {/* Center category badge */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                <div className="text-5xl mb-3 drop-shadow-lg">{r.emoji}</div>
                <div
                  className="text-[10px] tracking-[0.35em] uppercase px-3 py-1 rounded-full border"
                  style={{ color: r.accent, borderColor: `${r.accent}55`, background: "rgba(0,0,0,0.35)" }}
                >
                  {r.category}
                </div>
                <div className="font-display text-2xl mt-4 text-white leading-tight">{r.client}</div>
              </div>

              {/* Play hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/30">
                <div className="w-16 h-16 rounded-full glass-gold flex items-center justify-center">
                  <Play className="w-6 h-6 text-gold fill-gold ml-1" />
                </div>
              </div>

              {/* IG right rail */}
              <div className="absolute right-3 bottom-24 flex flex-col items-center gap-4 text-white">
                <div className="flex flex-col items-center">
                  <Heart className="w-6 h-6" />
                  <span className="text-[10px] mt-0.5">{r.likes}</span>
                </div>
                <div className="flex flex-col items-center">
                  <MessageSquare className="w-6 h-6" />
                  <span className="text-[10px] mt-0.5">2.1K</span>
                </div>
                <Send className="w-6 h-6" />
                <Bookmark className="w-6 h-6" />
                <MoreHorizontal className="w-6 h-6" />
              </div>

              {/* Bottom caption */}
              <div className="absolute bottom-0 inset-x-0 p-5 pr-14">
                <div className="text-xs font-semibold text-white mb-1">@deepak.edits</div>
                <div className="text-xs text-white/85 line-clamp-2">{r.caption}</div>
                <div className="text-xs mt-1" style={{ color: r.accent }}>{r.hashtag}</div>
                <div className="flex items-center gap-1 mt-2 text-[10px] text-white/70">
                  <Play className="w-3 h-3 fill-current" />
                  <span>{r.views} views</span>
                </div>
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
              className={`relative aspect-[9/16] h-[85vh] max-w-full rounded-[36px] overflow-hidden border border-white/10 bg-gradient-to-br ${REELS[open].gradient}`}
            >
              <div
                className="absolute inset-0 opacity-50 mix-blend-screen"
                style={{
                  backgroundImage: `radial-gradient(circle at 30% 20%, ${REELS[open].accent}66, transparent 60%), radial-gradient(circle at 70% 80%, ${REELS[open].accent}44, transparent 55%)`,
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center">
                <div className="text-7xl mb-6">{REELS[open].emoji}</div>
                <div
                  className="text-xs tracking-[0.4em] uppercase px-4 py-1.5 rounded-full border"
                  style={{ color: REELS[open].accent, borderColor: `${REELS[open].accent}55` }}
                >
                  {REELS[open].category}
                </div>
                <div className="font-display text-4xl mt-6 text-white">{REELS[open].client}</div>
                <div className="text-sm text-white/70 mt-3 max-w-xs">{REELS[open].caption}</div>
                <div className="flex items-center gap-6 mt-8 text-white/80 text-sm">
                  <div className="flex items-center gap-2"><Play className="w-4 h-4 fill-current" />{REELS[open].views}</div>
                  <div className="flex items-center gap-2"><Heart className="w-4 h-4" />{REELS[open].likes}</div>
                </div>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="text-xs text-white/60 text-center">Reel preview — full edit available on request</div>
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
    <section className="py-28 px-6 border-y border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,162,39,0.08),_transparent_70%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-xs tracking-[0.4em] text-gold uppercase mb-4">Selected Clients</div>
          <h3 className="font-display text-4xl md:text-5xl">
            Brands I Have <span className="text-gradient-gold italic">Worked With</span>
          </h3>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-gold/10 rounded-2xl overflow-hidden border border-gold/15">
          {BRANDS.map((b, i) => (
            <motion.div
              key={b}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              whileHover={{ y: -2 }}
              className="bg-background/95 aspect-[5/2] flex items-center justify-center group hover:bg-card transition-all duration-500 cursor-default relative"
            >
              <span className="absolute inset-x-6 top-4 text-[10px] tracking-[0.3em] text-muted-foreground/40 uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                Client 0{i + 1}
              </span>
              <span className="font-display text-lg md:text-2xl tracking-wide text-foreground/80 group-hover:text-gradient-gold transition-all">
                {b}
              </span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 bg-gold group-hover:w-2/3 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground/70 mt-10 max-w-2xl mx-auto">
          A curated selection of hospitality, lifestyle, entertainment and real-estate brands I've crafted content and creative direction for.
        </p>
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
