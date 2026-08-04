import React from "react";
import { Reveal } from "../components/Reveal";
import { Music2 } from "lucide-react";
import { SCHEDULE } from "../components/sectionData";

export default function Schedule() {
  return (
    <section id="jadwal" style={{ padding: "120px 24px", maxWidth: 900, margin: "0 auto" }}>
      <Reveal>
        <p style={{ letterSpacing: "0.3em", fontSize: 12, color: "#C6A15B", textTransform: "uppercase", textAlign: "center", marginBottom: 14 }}>
          Jadwal Malam
        </p>
        <h2 className="deco-title" style={{ fontSize: "clamp(26px,3.6vw,38px)", fontWeight: 500, textAlign: "center", marginBottom: 50 }}>
          Setiap Malam Punya Cerita
        </h2>
      </Reveal>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {SCHEDULE.map((item, index) => (
          <Reveal key={item.day} delay={index * 70}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 24,
                padding: "18px 24px",
                background: index % 2 === 0 ? "rgba(198,161,91,0.05)" : "transparent",
                borderRadius: 2,
              }}
            >
              <span className="deco-title" style={{ width: 90, flexShrink: 0, color: "#C6A15B", fontSize: 14, letterSpacing: "0.05em" }}>
                {item.day}
              </span>
              <span style={{ flex: 1, fontSize: 15, color: "#EDE3D3" }}>{item.event}</span>
              <span style={{ color: "#9C8F8A", fontSize: 13, display: "flex", alignItems: "center", gap: 6 }}>
                <Music2 size={13} /> {item.note}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
