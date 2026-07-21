import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Play, X, ArrowUpRight, Mail, Phone, Instagram, Linkedin, MessageCircle,
  Film, Palette, Sparkles, Share2, Bot, Target, ArrowDown, Volume2,
  Scissors, Type as TypeIcon, Music2, Layers, Wand2,
} from "lucide-react";

import heroBg from "@/assets/hero-bg.jpg";

// Real creator assets — served from /public so they ship with the repo (Vercel-friendly)
const portraitDeepak = { url: "/images/portrait-deepak.jpg" };

// Reels sourced from the creator's Drive folder
const vBelt = { url: "/videos/belt.mp4", thumb: "/images/belt-thumb.jpg" };
const vJewellery = { url: "/videos/jewellery-1.mp4", thumb: "/images/jewellery-1-thumb.jpg" };
const vCurryKing = { url: "/videos/curry-king.mp4", thumb: "/images/curry-king-thumb.jpg" };
const vDivine = { url: "/videos/divine.mp4", thumb: "/images/divine-thumb.jpg" };
const vDivinePeaks = { url: "/videos/divine-peaks.mp4", thumb: "/images/divine-peaks-thumb.jpg" };
const vLevelup = { url: "/videos/levelup-travels.mp4", thumb: "/images/levelup-travels-thumb.jpg" };
const vLoveChahal = { url: "/videos/lovechahal.mp4", thumb: "/images/lovechahal-thumb.jpg" };
const vUntitled = { url: "/videos/untitled-design.mp4", thumb: "/images/untitled-design-thumb.jpg" };
const vLifestyle = { url: "/videos/lifestyle-1.mp4", thumb: "/images/lifestyle-1-thumb.jpg" };

// Design / poster work — real creative posters from portfolio
const posterBizbox = { url: "/images/posters/bizbox.jpg" };
const posterHotelEscala = { url: "/images/posters/hotel-escala.jpg" };
const posterJewellery = { url: "/images/posters/jewellery.jpg" };
const posterLevelupTravels = { url: "/images/posters/levelup-travels.jpg" };
const posterPestControl = { url: "/images/posters/pestcontrol.jpg" };
const posterV3 = { url: "/images/posters/v3.jpg" };


export const Route = createFileRoute("/")({
  component: Index,
});

const ROLES = ["Video Editor", "Graphic Designer", "Social Media Manager", "Creative Strategist"];

const REELS = [
  { category: "Fashion", title: "Belt — Product Reel", src: vBelt.url, poster: vBelt.thumb, accent: "#E8B4A0" },
  { category: "Jewellery", title: "Signature Jewellery Film", src: vJewellery.url, poster: vJewellery.thumb, accent: "#F5D28C" },
  { category: "Food & Restaurant", title: "Curry King — Brand Reel", src: vCurryKing.url, poster: vCurryKing.thumb, accent: "#E8A87C" },
  { category: "Real Estate", title: "Divine — Property Showcase", src: vDivine.url, poster: vDivine.thumb, accent: "#C8B99C" },
  { category: "Real Estate", title: "Divine Peaks — Signature Homes", src: vDivinePeaks.url, poster: vDivinePeaks.thumb, accent: "#C8B99C" },
  { category: "Hospitality / Travel", title: "Levelup Travels — Destination Film", src: vLevelup.url, poster: vLevelup.thumb, accent: "#9BB8C4" },
  { category: "Social Media Campaigns", title: "Love Chahal — Brand Campaign", src: vLoveChahal.url, poster: vLoveChahal.thumb, accent: "#D4A0E8" },
  { category: "Brand Advertisement", title: "Signature Brand Spot", src: vUntitled.url, poster: vUntitled.thumb, accent: "#C8A96A" },
  { category: "Brand Advertisement", title: "Lifestyle — Creative Reel", src: vLifestyle.url, poster: vLifestyle.thumb, accent: "#C8A96A" },
];

const DESIGNS = [
  { category: "Hospitality Branding", title: "Hotel Escala — Campaign Poster", tag: "Print + Social", src: posterHotelEscala.url, h: "tall" },
  { category: "Travel Marketing", title: "Levelup Travels — Destination Poster", tag: "Marketing Creative", src: posterLevelupTravels.url, h: "med" },
  { category: "Jewellery", title: "Signature Jewellery — Editorial Poster", tag: "Luxury Creative", src: posterJewellery.url, h: "med" },
  { category: "Corporate Branding", title: "BizBox — Brand Poster", tag: "Corporate Identity", src: posterBizbox.url, h: "tall" },
  { category: "Service Branding", title: "Pest Control — Service Poster", tag: "Marketing Creative", src: posterPestControl.url, h: "med" },
  { category: "Fashion / Apparel", title: "V3 — Fashion Campaign", tag: "Fashion Poster", src: posterV3.url, h: "tall" },
];




const BRANDS: { name: string; sub?: string; className: string }[] = [
  { name: "Barista", className: "font-display italic text-3xl tracking-tight" },
  { name: "LEVELUP", sub: "HOTELS", className: "font-display tracking-[0.35em] text-xl font-semibold" },
  { name: "House of Chettinad", className: "font-display text-2xl tracking-wide" },
  { name: "DESI COMEDY", sub: "CLUB", className: "font-mono tracking-[0.25em] text-base font-bold" },
  { name: "Sultana", className: "font-display italic text-3xl" },
  { name: "ASH CULT", className: "font-display tracking-[0.5em] text-xl font-black" },
  { name: "Boho Fest", className: "font-display italic text-2xl" },
  { name: "GODREJ", sub: "RIVERINE", className: "font-display tracking-[0.3em] text-xl" },
  { name: "Rishita", sub: "DEVELOPERS", className: "font-display text-2xl tracking-wide" },
];

const SERVICES = [
  { icon: Film, title: "Video Editing", desc: "Cinematic cuts, color grading and post production crafted to elevate every frame." },
  { icon: Palette, title: "Graphic Design", desc: "Brand identities, posters and digital design built with editorial precision." },
  { icon: Sparkles, title: "Colour Grading / Correction", desc: "Cinematic colour grading and correction that give every frame a premium, editorial finish." },
  { icon: Share2, title: "Social Media Management", desc: "End-to-end content strategy and execution for performance driven brands." },
  { icon: Bot, title: "AI Video Creation", desc: "Next-generation visual storytelling powered by generative AI workflows." },
  { icon: Target, title: "Content Strategy", desc: "Data-led creative direction that turns audiences into loyal communities." },
];

const EXPERIENCE = [
  {
    company: "Gamoft Consultancy",
    role: "Junior Video Editor & Content Designer",
    year: "2021 — 2022",
    location: "Remote · India",
    type: "First role",
    desc: "Started my creative journey here — assisting senior editors, cutting short-form reels and learning the foundations of brand-led storytelling, color grading and motion graphics.",
    highlights: [
      "First exposure to live client work across F&B, fashion and real estate",
      "Built foundational templates for reel hooks, lower-thirds and end frames",
      "Cut over 150 reels in the first year as part of the in-house edit pod",
    ],
    stack: ["Premiere Pro", "After Effects", "Photoshop", "CapCut"],
  },
  {
    company: "Love Chahal Digital Marketing",
    role: "Video Editor & Reel Specialist",
    year: "2022 — 2023",
    location: "Lucknow, India",
    type: "Agency",
    desc: "Owned the reel and short-form video desk for personal brands, founders and lifestyle businesses. Built repeatable hook frameworks and on-brand edit templates that scaled across the roster.",
    highlights: [
      "Edited 400+ reels with several crossing 1M+ organic views",
      "Designed motion identity kits for 12 personal brands",
      "Cut turnaround from brief to publish-ready reel down to under 24 hours",
    ],
    stack: ["Premiere Pro", "After Effects", "Photoshop", "CapCut"],
  },
  {
    company: "Reerocket",
    role: "Content Designer & Reel Strategist",
    year: "2023 — 2024",
    location: "Remote",
    type: "Creator studio",
    desc: "Worked with founders and creators to build reel-first content strategies for Instagram and YouTube Shorts. Translated content pillars into weekly shot lists, edit decks and post-production SOPs.",
    highlights: [
      "Helped 9 creator accounts cross 100K followers within a launch quarter",
      "Built a hook + B-roll library used across the entire client roster",
      "Defined a tone and pacing guide adopted by the in-house edit team",
    ],
    stack: ["Premiere Pro", "Photoshop", "Figma", "Notion"],
  },
  {
    company: "Rahe Solution",
    role: "Social Media Manager & Creative Lead",
    year: "Feb 2026 — Jun 2026",
    location: "Texas, USA · Remote",
    type: "International",
    desc: "Led creative production and social growth for US brands — building AI-powered content, performance creatives and short-form campaigns across hospitality, real estate and local businesses.",
    highlights: [
      "Grew client accounts from 90 to 1,000+ followers in two months through strategic content planning",
      "Produced short-form videos reaching 2,000+ organic views per post",
      "Managed calendars, approvals and publishing via the RaheBoost AI platform",
      "Delivered reels, podcast clips, brand videos and marketing creatives across multiple US accounts",
      "Accelerated production with Sora, Veo 3, HeyGen, ElevenLabs and Midjourney",
    ],
    stack: ["SOCIAL MEDIA", "META ADS", "FIGMA", "AFTER EFFECTS", "AI TOOLS"],
  },
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

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-7">
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

        <h1 className="font-display font-black leading-[1.02] tracking-tight text-[clamp(2.5rem,8vw,7.5rem)]">
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
            className="block text-gradient-gold italic font-medium leading-[1.18] pb-3 overflow-visible"
          >
            Singh Surya
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-10 grid md:grid-cols-2 gap-10 items-end"
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
            Helping brands grow through high retention reels, performance creatives and premium digital storytelling.
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

        {/* Right: editing workspace preview — timeline + before/after */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 hidden lg:flex justify-center items-center relative"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-[440px]"
          >
            {/* ambient glow */}
            <div className="absolute -inset-10 rounded-[3rem] bg-gradient-to-br from-gold/25 via-amber-500/5 to-transparent blur-3xl" />

            {/* editor window */}
            <div className="relative rounded-2xl overflow-hidden border border-gold/20 bg-[oklch(0.14_0_0)] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.85),0_0_60px_-20px_rgba(212,175,55,0.3)]">
              {/* title bar */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-[oklch(0.16_0_0)]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                </div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">studio · sequence_01.prproj</div>
                <Wand2 className="w-3.5 h-3.5 text-gold/80" />
              </div>

              {/* preview viewport with before/after slider */}
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* "before" — raw, flat */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2a2520] via-[#1c1a16] to-[#0e0d0a]" />
                <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "3px 3px" }} />
                <div className="absolute top-3 left-3 px-2 py-0.5 text-[9px] tracking-[0.3em] uppercase rounded-sm bg-black/50 text-white/70 backdrop-blur-sm">BEFORE</div>

                {/* "after" — graded */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ clipPath: ["inset(0 50% 0 0)", "inset(0 35% 0 0)", "inset(0 50% 0 0)"] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3d1f1a] via-[#5a2a14] to-[#0b0b0b]" />
                  <div className="absolute -top-10 -left-10 w-2/3 h-2/3 rounded-full blur-3xl opacity-70" style={{ background: "radial-gradient(circle, #E8B547AA, transparent 65%)" }} />
                  <div className="absolute bottom-0 right-0 w-3/4 h-3/4 rounded-full blur-3xl opacity-50" style={{ background: "radial-gradient(circle, #E8B4A055, transparent 60%)" }} />
                  <div className="absolute top-3 right-3 px-2 py-0.5 text-[9px] tracking-[0.3em] uppercase rounded-sm bg-gold/90 text-primary-foreground">GRADED</div>
                </motion.div>

                {/* slider line */}
                <motion.div
                  className="absolute top-0 bottom-0 w-px bg-gold/90 shadow-[0_0_12px_var(--gold)]"
                  animate={{ left: ["50%", "65%", "50%"] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gold flex items-center justify-center shadow-[0_0_20px_var(--gold)]">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary-foreground" />
                  </div>
                </motion.div>

                {/* center play */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.div
                    animate={{ scale: [1, 1.06, 1], opacity: [0.85, 1, 0.85] }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                    className="w-14 h-14 rounded-full bg-white/10 backdrop-blur border border-white/40 flex items-center justify-center"
                  >
                    <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                  </motion.div>
                </div>

                {/* film grain */}
                <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "3px 3px" }} />
              </div>

              {/* timeline */}
              <div className="px-4 py-4 bg-[oklch(0.12_0_0)] border-t border-white/5 space-y-2">
                {/* time ruler */}
                <div className="flex items-center justify-between text-[9px] tracking-widest text-muted-foreground/70 mb-1">
                  <span>00:00</span>
                  <span className="text-gold">00:14</span>
                  <span>00:30</span>
                </div>
                {/* tracks */}
                {[
                  { icon: Film, label: "V1 · Footage", color: "bg-gradient-to-r from-amber-700/60 via-amber-500/70 to-amber-700/60", w: "w-[78%]" },
                  { icon: Layers, label: "V2 · Overlay", color: "bg-gradient-to-r from-purple-700/50 to-rose-500/50", w: "w-[55%] ml-[18%]" },
                  { icon: TypeIcon, label: "T1 · Title", color: "bg-gradient-to-r from-gold/70 to-amber-300/70", w: "w-[28%] ml-[10%]" },
                  { icon: Music2, label: "A1 · Audio", color: "bg-gradient-to-r from-emerald-700/40 via-emerald-500/50 to-emerald-700/40", w: "w-[92%]" },
                ].map((t, i) => {
                  const I = t.icon;
                  return (
                    <div key={i} className="flex items-center gap-2">
                      <I className="w-3 h-3 text-muted-foreground/60 flex-shrink-0" />
                      <div className="flex-1 h-3.5 rounded-sm bg-white/[0.03] overflow-hidden relative">
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 1 + i * 0.15, duration: 0.8, ease: "easeOut" }}
                          style={{ transformOrigin: "left" }}
                          className={`h-full rounded-sm ${t.color} ${t.w}`}
                        />
                      </div>
                      <span className="text-[9px] tracking-wider uppercase text-muted-foreground/60 w-14 text-right">{t.label.split(" ")[0]}</span>
                    </div>
                  );
                })}
                {/* playhead bar */}
                <motion.div
                  className="absolute left-[28%] top-[58%] bottom-4 w-px bg-gold/70"
                  animate={{ left: ["28%", "70%", "28%"] }}
                  transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* status bar */}
              <div className="flex items-center justify-between px-4 py-2 border-t border-white/5 bg-[oklch(0.10_0_0)] text-[10px] tracking-widest uppercase">
                <div className="flex items-center gap-3 text-muted-foreground/70">
                  <span className="flex items-center gap-1.5"><Scissors className="w-3 h-3 text-gold" /> Cut</span>
                  <span>23.976 fps</span>
                  <span>4K · ProRes</span>
                </div>
                <span className="flex items-center gap-1.5 text-gold">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  Rendering
                </span>
              </div>
            </div>

            {/* floating stat chip */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -left-8 -top-6 glass-gold rounded-2xl px-4 py-3 backdrop-blur-xl border border-gold/30 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
            >
              <div className="text-[10px] tracking-[0.2em] text-gold uppercase">Color Graded</div>
              <div className="font-display text-xl text-gradient-gold">4K · HDR</div>
            </motion.div>

            {/* floating badge */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-6 -bottom-6 glass rounded-2xl px-4 py-3 backdrop-blur-xl border border-foreground/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
            >
              <div className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">Now editing</div>
              <div className="text-sm text-foreground font-medium">Brand campaign · 12 cuts</div>
            </motion.div>
          </motion.div>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {REELS.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group"
            >
              <motion.button
                onClick={() => setOpen(i)}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                className="relative w-full aspect-[9/16] rounded-[26px] overflow-hidden text-left border border-white/5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)] group-hover:shadow-[0_30px_80px_-20px_rgba(212,175,55,0.35)] transition-shadow duration-500"
              >
                {/* Real video thumbnail */}
                <img
                  src={r.poster}
                  alt={r.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                {/* accent wash for cohesion with palette */}
                <div
                  className="absolute inset-0 mix-blend-overlay opacity-30 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 30% 20%, ${r.accent}55, transparent 60%)` }}
                />
                {/* film grain */}
                <div
                  className="absolute inset-0 opacity-[0.10] mix-blend-overlay pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
                    backgroundSize: "3px 3px, 5px 5px",
                  }}
                />
                {/* vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.7)_100%)] pointer-events-none" />


                {/* Top status row */}
                <div className="absolute top-0 inset-x-0 p-3 flex items-center justify-between text-white/90 text-[10px] z-10">
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/45 backdrop-blur-sm border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="tracking-widest font-medium">REEL</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/45 backdrop-blur-sm border border-white/10">
                    <Volume2 className="w-3 h-3" />
                    <span>0:{15 + i}</span>
                  </div>
                </div>

                {/* Persistent center play */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <motion.div
                    animate={{ scale: [1, 1.08, 1], opacity: [0.9, 1, 0.9] }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                  >
                    <span className="absolute inset-0 rounded-full border border-white/30 scale-150 group-hover:scale-[1.9] transition-transform duration-500" />
                    <span className="absolute inset-0 rounded-full border border-white/20 scale-[1.8] group-hover:scale-[2.3] transition-transform duration-700" />
                    <div className="w-16 h-16 rounded-full bg-white/95 backdrop-blur flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.5)] group-hover:bg-gold transition-colors">
                      <div className="w-0 h-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-black ml-1" />
                    </div>
                  </motion.div>
                </div>

                {/* Bottom caption — clean, no IG UI */}
                <div className="absolute bottom-0 inset-x-0 p-4 z-10 bg-gradient-to-t from-black/85 via-black/40 to-transparent">
                  <div className="text-[10px] tracking-[0.3em] uppercase mb-1.5" style={{ color: r.accent }}>
                    {r.category}
                  </div>
                  <div className="font-display text-lg text-white leading-tight">{r.title}</div>
                  
                </div>

                {/* timeline scrubber */}
                <div className="absolute bottom-0 inset-x-0 h-[3px] bg-white/10 z-20">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: `${30 + ((i * 13) % 55)}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.4 + i * 0.1, ease: "easeOut" }}
                    className="h-full bg-gold"
                  />
                </div>
              </motion.button>

              {/* Category label below card */}
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-gold">{r.category}</div>
                  <div className="font-display text-lg text-foreground mt-1 leading-tight">{r.title}</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground mt-1 group-hover:text-gold group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
            </motion.div>
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
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-[9/16] h-[85vh] max-w-full rounded-[36px] overflow-hidden border border-white/10 bg-black shadow-[0_30px_120px_-20px_rgba(0,0,0,0.9)]"
            >
              <video
                key={REELS[open].src}
                src={REELS[open].src}
                poster={REELS[open].poster}
                autoPlay
                controls
                playsInline
                loop
                className="absolute inset-0 w-full h-full object-cover bg-black"
              />
              <div className="absolute top-0 inset-x-0 p-4 flex items-center justify-between pointer-events-none z-10">
                <div
                  className="text-[10px] tracking-[0.4em] uppercase px-3 py-1.5 rounded-full border bg-black/40 backdrop-blur-sm"
                  style={{ color: REELS[open].accent, borderColor: `${REELS[open].accent}55` }}
                >
                  {REELS[open].category}
                </div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/70 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                  {REELS[open].title}
                </div>
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
          eyebrow="Creative Design Work"
          title="Posters, brand systems & social creatives."
          sub="Poster design, brand design and social media creatives — crafted for scroll-stopping feeds and editorial print drops."
        />
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {DESIGNS.map((d, i) => {
            const aspect = d.h === "tall" ? "aspect-[3/4]" : d.h === "med" ? "aspect-square" : "aspect-[4/5]";
            return (
              <motion.button
                key={i}
                onClick={() => setOpen(i)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                className="group block w-full mb-5 break-inside-avoid rounded-2xl overflow-hidden bg-card relative text-left border border-white/5 hover:border-gold/40 transition-colors"
              >
                <div className={`relative w-full ${aspect} bg-black overflow-hidden`}>
                  <img
                    src={d.src}
                    alt={d.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  {/* film grain */}
                  <div
                    className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
                    style={{
                      backgroundImage:
                        "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
                      backgroundSize: "3px 3px, 5px 5px",
                    }}
                  />
                  {/* hover wash + caption (caption hidden until hover so we don't overlap baked-in artwork text) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-4 h-4 text-gold" />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="text-[10px] tracking-[0.3em] uppercase text-gold/90">{d.tag}</div>
                    <div className="font-display text-lg text-white mt-1 leading-tight">{d.title}</div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <button onClick={() => setOpen(null)} className="absolute top-6 right-6 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-gold hover:text-primary-foreground transition-all z-10">
              <X className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-[92vw] rounded-2xl overflow-hidden border border-white/10 bg-black shadow-[0_30px_120px_-20px_rgba(0,0,0,0.9)]"
            >
              <img
                src={DESIGNS[open].src}
                alt={DESIGNS[open].title}
                className="block max-h-[90vh] max-w-[92vw] w-auto h-auto object-contain"
              />
              <div className="absolute top-0 inset-x-0 p-4 flex items-center justify-between bg-gradient-to-b from-black/70 to-transparent pointer-events-none">
                <div className="text-[10px] tracking-[0.4em] uppercase text-gold">{DESIGNS[open].tag}</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/80">{DESIGNS[open].title}</div>
              </div>
            </motion.div>
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
              key={b.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              whileHover={{ y: -2 }}
              className="bg-background/95 aspect-[5/2] flex items-center justify-center group hover:bg-card transition-all duration-500 cursor-default relative px-4"
            >
              <span className="absolute inset-x-6 top-4 text-[10px] tracking-[0.3em] text-muted-foreground/40 uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                Client 0{i + 1}
              </span>
              <div className="flex flex-col items-center justify-center gap-1 text-center text-foreground/45 grayscale group-hover:text-gold group-hover:grayscale-0 transition-all duration-500">
                <span className={`${b.className} leading-none`}>{b.name}</span>
                {b.sub && (
                  <span className="text-[9px] tracking-[0.45em] uppercase text-foreground/35 group-hover:text-gold/80 transition-colors">
                    {b.sub}
                  </span>
                )}
              </div>
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
          sub="My journey working with agencies, brands and international clients across creative production and digital marketing."
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
              <div className="absolute left-4 md:left-auto top-8 w-3 h-3 rounded-full bg-gold shadow-[0_0_20px_var(--gold)] -translate-x-1/2 md:translate-x-0"
                style={i % 2 === 0 ? { right: "-6px" } : { left: "-6px" }} />
              <div className="ml-12 md:ml-0 p-7 md:p-8 rounded-2xl glass group hover:border-gold/40 transition-all relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gold/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between gap-3 relative">
                  <div className="text-[10px] tracking-[0.3em] text-gold uppercase">{e.year}</div>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground/70 px-2 py-1 rounded-full border border-border/60">
                    {e.type}
                  </div>
                </div>
                <div className="font-display text-2xl md:text-3xl mt-3 leading-tight">{e.company}</div>
                <div className="text-sm text-foreground/80 mt-1">{e.role}</div>
                <div className="text-xs text-muted-foreground/70 mt-1 tracking-wide">{e.location}</div>
                <div className="h-px w-12 bg-gold/40 my-5" />
                <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                <ul className="mt-5 space-y-2">
                  {e.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm text-muted-foreground/90 leading-relaxed">
                      <span className="mt-2 h-1 w-1 rounded-full bg-gold flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {e.stack.map((s) => (
                    <span key={s} className="text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-full border border-gold/20 text-gold/90 bg-gold/[0.03]">
                      {s}
                    </span>
                  ))}
                </div>
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
  const [focused, setFocused] = useState(false);
  const links = [
    { icon: Mail, label: "Email", value: "deepakkumarsinghsurya@gmail.com", href: "mailto:deepakkumarsinghsurya@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 8400510226", href: "tel:+918400510226" },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat directly", href: "https://wa.me/918400510226" },
  ];

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => setFocused(true), 600);
      setTimeout(() => setFocused(false), 2000);
    }
  };

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
            <button onClick={scrollToContact} className="mt-10 inline-flex items-center gap-3 bg-gold text-primary-foreground px-8 py-4 rounded-full font-medium hover:shadow-[var(--shadow-gold)] transition-all cursor-pointer">
              Start a Project <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`space-y-4 transition-all duration-700 ${focused ? "rounded-2xl ring-1 ring-gold/40 bg-gold/[0.03] p-4 -m-4" : ""}`}
          >
            <div className="relative rounded-2xl overflow-hidden mb-8 aspect-[4/5] max-w-sm">
              <img src={portraitDeepak.url} alt="Deepak Kumar Singh Surya" className="w-full h-full object-cover" loading="lazy" width={1024} height={1280} />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            </div>
            {links.map((l) => {
              const Icon = l.icon;
              return (
                <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Deepak Kumar Singh Surya. All rights reserved.</div>
          <div className="font-display tracking-wider">Crafted with intention<span className="text-gold">.</span></div>
        </div>
        <div className="pt-5 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] tracking-[0.2em] uppercase text-muted-foreground/60">
          <div>
            Website Designed &amp; Developed by{" "}
            <span className="text-foreground/80 tracking-wide normal-case font-medium">Himanshu Pawar</span>
          </div>
          <a
            href="mailto:pawarhp15@gmail.com"
            className="tracking-wide normal-case text-muted-foreground/70 hover:text-gold transition-colors"
          >
            pawarhp15@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
