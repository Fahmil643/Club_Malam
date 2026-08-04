import React from "react";
import { Wine, Menu as MenuIcon, X } from "lucide-react";
import { NAV } from "./sectionData";

export default function NavBar({ scrolled, navOpen, setNavOpen, scrollTo }) {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "rgba(11,10,12,0.92)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(198,161,91,0.25)" : "1px solid transparent",
        backdropFilter: "blur(10px)",
        transition: "all 0.5s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "18px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          className="deco-title"
          style={{
            fontSize: 22,
            letterSpacing: "0.15em",
            color: "#EDE3D3",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Wine size={18} color="#C6A15B" /> VELOUR
        </div>
        <nav
          className="desk-nav"
          style={{ display: "flex", gap: 34, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase" }}
        >
          {NAV.map((item) => (
            <span key={item.id} className="nav-link" onClick={() => scrollTo(item.id)}>
              {item.label}
            </span>
          ))}
        </nav>
        <button
          className="mobile-toggle"
          onClick={() => setNavOpen((prev) => !prev)}
          style={{ display: "none", background: "none", border: "none", color: "#EDE3D3", cursor: "pointer" }}
        >
          {navOpen ? <X size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      {navOpen && (
        <div
          className="mobile-panel"
          style={{
            background: "#0B0A0C",
            borderTop: "1px solid rgba(198,161,91,0.2)",
            padding: "18px 28px",
            display: "flex",
            flexDirection: "column",
            gap: 18,
            fontSize: 14,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          {NAV.map((item) => (
            <span key={item.id} className="nav-link" onClick={() => scrollTo(item.id)} style={{ cursor: "pointer", width: "fit-content" }}>
              {item.label}
            </span>
          ))}
        </div>
      )}
    </header>
  );
}
