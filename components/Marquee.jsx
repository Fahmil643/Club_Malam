import React from "react";

const marqueeItems = [
  "JUMAT & SABTU — DJ SET TENGAH MALAM",
  "BUKA SETIAP HARI 19.00–02.00",
  "DRESS CODE: SMART ELEGANT",
  "RESERVASI DIANJURKAN",
];

export default function Marquee() {
  return (
    <div
      style={{
        borderTop: "1px solid rgba(198,161,91,0.25)",
        borderBottom: "1px solid rgba(198,161,91,0.25)",
        background: "#120F13",
        overflow: "hidden",
        padding: "14px 0",
      }}
    >
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div key={copy} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            {marqueeItems.map((item, index) => (
              <span
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: 13,
                  letterSpacing: "0.15em",
                  color: "#9C8F8A",
                  padding: "0 28px",
                  whiteSpace: "nowrap",
                }}
              >
                {item} <span style={{ color: "#C6A15B", margin: "0 28px" }}>✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
