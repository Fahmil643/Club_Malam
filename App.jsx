import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Atmosphere from "./sections/Atmosphere";
import MenuSection from "./sections/MenuSection";
import Schedule from "./sections/Schedule";
import Reservation from "./sections/Reservation";
import Footer from "./sections/Footer";
import Marquee from "./components/Marquee";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [form, setForm] = useState({ nama: "", tanggal: "", jam: "", tamu: "2", telepon: "", catatan: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setNavOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={{ background: "#0B0A0C", color: "#EDE3D3", fontFamily: "'Jost', sans-serif", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Jost:wght@300;400;500&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        .deco-title { font-family: 'Cinzel', serif; letter-spacing: 0.08em; }
        .deco-italic { font-family: 'Cormorant Garamond', serif; font-style: italic; }
        input:focus, textarea:focus, select:focus { outline: none; border-color: #E8C77E !important; }
        ::selection { background: #C6A15B; color: #0B0A0C; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes flicker { 0%,100% { opacity:1; } 50% { opacity:0.82; } }
        .marquee-track { display: flex; width: max-content; animation: marquee 32s linear infinite; }
        .spin-slow { animation: spin-slow 90s linear infinite; }
        .flicker { animation: flicker 4.5s ease-in-out infinite; }
        .nav-link { position: relative; cursor: pointer; }
        .nav-link::after { content: ''; position: absolute; left: 0; bottom: -6px; width: 0; height: 1px; background: #C6A15B; transition: width 0.35s ease; }
        .nav-link:hover::after { width: 100%; }
        .card-lift { transition: transform 0.5s cubic-bezier(.16,.84,.44,1), box-shadow 0.5s ease, border-color 0.4s ease; }
        .card-lift:hover { transform: translateY(-8px); border-color: #C6A15B !important; box-shadow: 0 24px 60px -20px rgba(198,161,91,0.25); }
        .btn-gold { transition: all 0.4s cubic-bezier(.16,.84,.44,1); }
        .btn-gold:hover { background: #E8C77E !important; box-shadow: 0 10px 30px -8px rgba(232,199,126,0.5); transform: translateY(-2px); }
        .btn-outline:hover { background: rgba(198,161,91,0.12) !important; border-color: #E8C77E !important; }
        @media (max-width: 768px) { .desk-nav { display:none !important; } .mobile-toggle { display:flex !important; } }
        @media (min-width: 769px) { .mobile-panel { display:none !important; } }
      `}</style>

      <NavBar scrolled={scrolled} navOpen={navOpen} setNavOpen={setNavOpen} scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <Marquee />
      <About />
      <Atmosphere />
      <MenuSection />
      <Schedule />
      <Reservation form={form} sent={sent} setForm={setForm} submit={submit} />
      <Footer />
    </div>
  );
}
