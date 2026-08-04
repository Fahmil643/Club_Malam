import React from "react";
import { Reveal } from "../components/Reveal";
import { Sparkles } from "lucide-react";

const inputStyle = {
  background: "#0B0A0C",
  border: "1px solid rgba(237,227,211,0.2)",
  color: "#EDE3D3",
  padding: "14px 16px",
  fontSize: 14,
  fontFamily: "'Jost',sans-serif",
  width: "100%",
  transition: "border-color 0.3s ease",
};

export default function Reservation({ form, sent, setForm, submit }) {
  return (
    <section id="reservasi" style={{ padding: "40px 24px 140px", background: "#120F13", borderTop: "1px solid rgba(198,161,91,0.2)" }}>
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <Reveal>
          <p style={{ letterSpacing: "0.3em", fontSize: 12, color: "#C6A15B", textTransform: "uppercase", textAlign: "center", marginBottom: 14 }}>
            Reservasi
          </p>
          <h2 className="deco-title" style={{ fontSize: "clamp(26px,3.6vw,38px)", fontWeight: 500, textAlign: "center", marginBottom: 40 }}>
            Amankan Meja Anda
          </h2>
        </Reveal>
        {sent ? (
          <Reveal>
            <div style={{ textAlign: "center", border: "1px solid rgba(198,161,91,0.35)", padding: "40px 24px" }}>
              <Sparkles size={26} color="#C6A15B" style={{ marginBottom: 14 }} />
              <p className="deco-italic" style={{ fontSize: 20, color: "#EDE3D3", marginBottom: 8 }}>
                Terima kasih, {form.nama || "Tamu"}.
              </p>
              <p style={{ color: "#9C8F8A", fontSize: 14, marginBottom: 20 }}>
                Permintaan reservasi Anda telah kami terima. Tim kami akan menghubungi Anda melalui telepon untuk konfirmasi.
              </p>
              <button
                type="button"
                onClick={() => setForm({ nama: "", tanggal: "", jam: "", tamu: "2", telepon: "", catatan: "" }) || window.location.reload()}
                className="btn-outline"
                style={{
                  background: "transparent",
                  color: "#EDE3D3",
                  border: "1px solid rgba(198,161,91,0.4)",
                  padding: "10px 24px",
                  fontSize: 12,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                Reservasi Baru
              </button>
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <form onSubmit={submit} style={{ display: "grid", gap: 18 }}>
              <input required placeholder="Nama Lengkap" value={form.nama} onChange={(e) => setForm({ ...form, nama: e.target.value })} style={inputStyle} />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                <input required type="date" value={form.tanggal} onChange={(e) => setForm({ ...form, tanggal: e.target.value })} style={inputStyle} />
                <input required type="time" value={form.jam} onChange={(e) => setForm({ ...form, jam: e.target.value })} style={inputStyle} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                <select value={form.tamu} onChange={(e) => setForm({ ...form, tamu: e.target.value })} style={inputStyle}>
                  {[1, 2, 3, 4, 5, 6, "7+"].map((n) => (
                    <option key={n} value={n}>{n} Tamu</option>
                  ))}
                </select>
                <input required placeholder="No. Telepon" value={form.telepon} onChange={(e) => setForm({ ...form, telepon: e.target.value })} style={inputStyle} />
              </div>
              <textarea placeholder="Catatan (opsional)" rows={3} value={form.catatan} onChange={(e) => setForm({ ...form, catatan: e.target.value })} style={{ ...inputStyle, resize: "vertical", fontFamily: "'Jost',sans-serif" }} />
              <button
                type="submit"
                className="btn-gold"
                style={{
                  background: "#C6A15B",
                  color: "#0B0A0C",
                  border: "none",
                  padding: "16px",
                  fontSize: 13,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  fontWeight: 500,
                  marginTop: 8,
                }}
              >
                Ajukan Reservasi
              </button>
            </form>
          </Reveal>
        )}
      </div>
    </section>
  );
}
