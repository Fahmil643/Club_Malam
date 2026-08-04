import React from "react";
import { Reveal } from "../components/Reveal";
import { MENU } from "../components/sectionData";

export default function MenuSection() {
  return (
    <section
      id="menu"
      style={{
        padding: "40px 24px 120px",
        background: "#120F13",
        borderTop: "1px solid rgba(198,161,91,0.2)",
        borderBottom: "1px solid rgba(198,161,91,0.2)",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <Reveal>
          <p style={{ letterSpacing: "0.3em", fontSize: 12, color: "#C6A15B", textTransform: "uppercase", textAlign: "center", marginBottom: 14 }}>
            Menu Signature
          </p>
          <h2 className="deco-title" style={{ fontSize: "clamp(26px,3.6vw,38px)", fontWeight: 500, textAlign: "center", marginBottom: 50 }}>
            Koktail Pilihan
          </h2>
        </Reveal>
        <div>
          {MENU.map((item, index) => (
            <Reveal key={item.name} delay={index * 80}>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 12,
                  padding: "20px 0",
                  borderBottom: index < MENU.length - 1 ? "1px solid rgba(237,227,211,0.1)" : "none",
                }}
              >
                <div style={{ flexShrink: 0 }}>
                  <h4 className="deco-italic" style={{ fontSize: 21, color: "#EDE3D3", margin: 0 }}>
                    {item.name}
                  </h4>
                  <p style={{ color: "#9C8F8A", fontSize: 13, margin: "6px 0 0" }}>{item.desc}</p>
                </div>
                <span style={{ flex: 1, borderBottom: "1px dotted rgba(198,161,91,0.3)", transform: "translateY(-6px)" }} />
                <span style={{ color: "#C6A15B", fontSize: 15, flexShrink: 0, fontFamily: "'Cinzel',serif" }}>
                  Rp {item.price}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
