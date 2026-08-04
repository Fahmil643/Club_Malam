import React from "react";
import { Sparkles } from "lucide-react";

export default function DecoDivider() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 14,
        margin: "0 auto",
        maxWidth: 220,
      }}
    >
      <span style={{ height: 1, flex: 1, background: "linear-gradient(90deg, transparent, #C6A15B)" }} />
      <Sparkles size={14} color="#C6A15B" />
      <span style={{ height: 1, flex: 1, background: "linear-gradient(270deg, transparent, #C6A15B)" }} />
    </div>
  );
}
