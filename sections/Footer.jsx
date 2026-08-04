import React from "react";
import { Wine, MapPin, Clock, Phone, Instagram } from "lucide-react";
import DecoDivider from "../components/DecoDivider";

export default function Footer() {
  return (
    <footer style={{ padding: "70px 24px 40px", textAlign: "center" }}>
      <div
        className="deco-title"
        style={{
          fontSize: 20,
          letterSpacing: "0.15em",
          marginBottom: 22,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        }}
      >
        <Wine size={16} color="#C6A15B" /> VELOUR
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 32, color: "#9C8F8A", fontSize: 13, marginBottom: 30 }}>
        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <MapPin size={14} color="#C6A15B" /> Jl. Sudirman Kav. 45, Jakarta
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Clock size={14} color="#C6A15B" /> Setiap hari, 19.00 – 02.00
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Phone size={14} color="#C6A15B" /> +62 21 555 0192
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Instagram size={14} color="#C6A15B" /> @velour.jkt
        </span>
      </div>
      <DecoDivider />
      <p style={{ color: "#5c534f", fontSize: 12, marginTop: 26, letterSpacing: "0.05em" }}>
        © 2026 Velour. Reservasi terbatas, malam tak terbatas.
      </p>
    </footer>
  );
}
