import React from "react";

export default function DecoFan({ size = 640, className = "" }) {
  const rays = Array.from({ length: 16 });

  return (
    <svg viewBox="0 0 640 640" width={size} height={size} className={className} style={{ overflow: "visible" }}>
      <defs>
        <radialGradient id="fanGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8C77E" stopOpacity="0.35" />
          <stop offset="55%" stopColor="#C6A15B" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#C6A15B" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="rayGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8C77E" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#E8C77E" stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle cx="320" cy="320" r="300" fill="url(#fanGlow)" />
      <g>
        {rays.map((_, i) => {
          const angle = (360 / rays.length) * i;
          return (
            <rect
              key={i}
              x="317"
              y="30"
              width="1.4"
              height="290"
              fill="url(#rayGrad)"
              transform={`rotate(${angle} 320 320)`}
            />
          );
        })}
      </g>
      <circle cx="320" cy="320" r="120" fill="none" stroke="#C6A15B" strokeOpacity="0.35" strokeWidth="1" />
      <circle cx="320" cy="320" r="150" fill="none" stroke="#C6A15B" strokeOpacity="0.2" strokeWidth="1" />
    </svg>
  );
}
