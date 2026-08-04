import React from "react";
import { Reveal } from "../components/Reveal";
import DecoFan from "../components/DecoFan";
import { ATMOSPHERES } from "../components/sectionData";

export default function Atmosphere() {
  return (
    <section id="suasana" style={{ padding: "40px 24px 120px", maxWidth: 1180, margin: "0 auto" }}>
      <Reveal>
        <p style={{ letterSpacing: "0.3em", fontSize: 12, color: "#C6A15B", textTransform: "uppercase", textAlign: "center", marginBottom: 14 }}>
          Suasana
        </p>
        <h2 className="deco-title" style={{ fontSize: "clamp(26px,3.6vw,38px)", fontWeight: 500, textAlign: "center", marginBottom: 60 }}>
          Tiga Ruang, Tiga Mood
        </h2>
      </Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: 28 }}>
        {ATMOSPHERES.map((item, index) => (
          <Reveal key={item.title} delay={index * 120}>
            <div className="card-lift" style={{ border: "1px solid rgba(198,161,91,0.2)", borderRadius: 2, overflow: "hidden", height: "100%" }}>
              <div style={{ height: 200, background: item.grad, position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, opacity: 0.5 }}>
                  <DecoFan size={280} />
                </div>
              </div>
              <div style={{ padding: 28 }}>
                <h3 className="deco-title" style={{ fontSize: 18, marginBottom: 12, letterSpacing: "0.05em" }}>{item.title}</h3>
                <p style={{ color: "#9C8F8A", fontSize: 14, lineHeight: 1.8 }}>{item.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
