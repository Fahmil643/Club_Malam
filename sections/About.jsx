import React from "react";
import { Reveal } from "../components/Reveal";
import DecoDivider from "../components/DecoDivider";

export default function About() {
  return (
    <section id="tentang" style={{ padding: "120px 24px", maxWidth: 1180, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 60, alignItems: "center" }}>
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
            <p style={{ letterSpacing: "0.3em", fontSize: 12, color: "#C6A15B", textTransform: "uppercase", marginBottom: 18 }}>
              Tentang Velour
            </p>
            <h2 className="deco-title" style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 500, color: "#EDE3D3", marginBottom: 24, lineHeight: 1.3 }}>
              Dibangun dari kepercayaan bahwa malam yang baik adalah sebuah karya seni
            </h2>
            <p style={{ color: "#9C8F8A", lineHeight: 2, fontSize: 15 }}>
              Sejak 2016, Velour menjadi persinggahan bagi mereka yang mencari lebih dari sekadar minuman.
              Setiap sudut dirancang dengan kuningan tua, beludru anggur, dan cahaya yang tahu kapan harus meredup.
              Bartender kami menyusun setiap gelas seperti komposisi musik — perlahan, presisi, dan penuh karakter.
            </p>
            <div style={{ marginTop: 36 }}>
              <DecoDivider />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
