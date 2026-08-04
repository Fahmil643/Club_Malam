import React from "react";
import DecoFan from "../components/DecoFan";

export default function Hero({ scrollTo }) {
  return (
    <section
      id="beranda"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "140px 24px 80px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          zIndex: 0,
        }}
        className="spin-slow"
      >
        <DecoFan size={720} />
      </div>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 30%, rgba(74,16,39,0.35), transparent 60%)", zIndex: 0 }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 780 }}>
        <p style={{ letterSpacing: "0.35em", fontSize: 12, color: "#9C8F8A", marginBottom: 22, textTransform: "uppercase" }}>
          Lounge &amp; Bar Malam
        </p>
        <h1 className="deco-title flicker" style={{ fontSize: "clamp(48px, 9vw, 108px)", lineHeight: 1, margin: 0, color: "#EDE3D3" }}>
          VELOUR
        </h1>
        <p className="deco-italic" style={{ fontSize: "clamp(18px, 2.4vw, 26px)", color: "#C6A15B", marginTop: 22, marginBottom: 8 }}>
          Malam kota, disuling menjadi cahaya, musik, dan vermouth.
        </p>
        <p style={{ color: "#9C8F8A", fontSize: 14, maxWidth: 480, margin: "18px auto 40px", lineHeight: 1.8 }}>
          Sebuah ruang tersembunyi di jantung kota — reservasi terbatas, suasana yang tak lekas dilupakan.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => scrollTo("reservasi")}
            className="btn-gold"
            style={{
              background: "#C6A15B",
              color: "#0B0A0C",
              border: "none",
              padding: "14px 32px",
              fontSize: 13,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
              fontFamily: "'Jost',sans-serif",
              fontWeight: 500,
            }}
          >
            Reservasi Meja
          </button>
          <button
            onClick={() => scrollTo("menu")}
            className="btn-outline"
            style={{
              background: "transparent",
              color: "#EDE3D3",
              border: "1px solid rgba(237,227,211,0.35)",
              padding: "14px 32px",
              fontSize: 13,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
              fontFamily: "'Jost',sans-serif",
              fontWeight: 500,
            }}
          >
            Lihat Menu
          </button>
        </div>
      </div>
    </section>
  );
}
