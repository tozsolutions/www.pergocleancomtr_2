"use client";

import { useState } from "react";
import { pricing } from "@/lib/site";

export function PricingCalculator({ endpoint }: { endpoint: string }) {
  const [systemType, setSystemType] = useState("");
  const [packageType, setPackageType] = useState("eco");
  const [m2, setM2] = useState<number | "">("");
  const [sehir, setSehir] = useState("");
  const [geceCalismasi, setGeceCalismasi] = useState(false);
  const [adSoyad, setAdSoyad] = useState("");
  const [telefon, setTelefon] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Only Pergola group needs ECO/PLUS package selection
  const needsPackage = systemType === "pergola";
  // These systems require site inspection → "Fiyat Alınız"
  const showPriceInfo = ["cam_tavan", "gunes_paneli"].includes(systemType);

  let calculatedPrice: number | null = null;
  if (!showPriceInfo && m2 && typeof m2 === "number" && m2 > 0) {
    let basePrice = 0;
    if (systemType === "pergola") {
      const p = packageType === "eco" ? pricing.pergola.eco : pricing.pergola.plus;
      basePrice = m2 <= p.threshold ? p.base : m2 * p.perM2;
    } else if (systemType === "zip") {
      basePrice = m2 <= pricing.zip.threshold ? pricing.zip.base : m2 * pricing.zip.perM2;
    }
    // Antalya için %30 artış
    if (sehir === "antalya") {
      basePrice = basePrice * 1.30;
    }
    // Gece çalışması için %5 artış
    if (geceCalismasi) {
      basePrice = basePrice * 1.05;
    }
    calculatedPrice = basePrice;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);

    const payload: any = {
      sistemTipi: systemType,
      paketTipi: needsPackage ? packageType : "N/A",
      metrekare: m2 || "N/A",
      sehir: sehir === "antalya" ? "Antalya (+%30)" : "Ankara",
      geceCalismasi: geceCalismasi ? "Evet (+%5)" : "Hayır",
      adSoyad,
      telefon,
      email,
      hesaplananFiyat: calculatedPrice ? `${calculatedPrice} TL` : "Fiyat Alınız",
      _honey: formData.get("_honey"),
    };

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Gönderim başarısız.");
      setMessage("Talebiniz alındı. WhatsApp veya e-posta ile detaylı teklifiniz iletilecektir.");
      setM2("");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Bir hata oluştu.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="card price-form" style={{ padding: 34, background: "rgba(255,255,255,.90)" }}>
      <form onSubmit={handleSubmit} className="grid" style={{ gap: 16 }}>
        <h3 className="heading-sm" style={{ textAlign: "center", marginBottom: 10 }}>Restorasyon Yatırım Analizi</h3>

        {/* Sistem Tipi */}
        <label htmlFor="system-type">
          <span style={{ display: "block", marginBottom: 8, fontWeight: 700 }}>Sistem Tipi Seçimi</span>
          <select id="system-type" className="select" required value={systemType} onChange={(e) => setSystemType(e.target.value)}>
            <option value="" disabled>Seçiniz...</option>
            <option value="pergola">Pergola / BioClimatic / RollingRoof</option>
            <option value="zip">ZipPerde / Wintent Sistemleri</option>
            <option value="cam_tavan">Cam Tavan / Tavan Zip</option>
            <option value="gunes_paneli">Güneş Paneli Üniteleri</option>
          </select>
        </label>

        {/* Şehir Seçimi */}
        <label htmlFor="sehir">
          <span style={{ display: "block", marginBottom: 8, fontWeight: 700 }}>Şehir Seçimi</span>
          <select id="sehir" className="select" required value={sehir} onChange={(e) => setSehir(e.target.value)}>
            <option value="" disabled>Seçiniz...</option>
            <option value="ankara">Ankara</option>
            <option value="antalya">Antalya</option>
          </select>
          {sehir === "antalya" && (
            <span className="form-note" style={{ color: "#d97706", fontWeight: 600 }}>
              Antalya bölgesi için fiyatlar %30 artırılmıştır.
            </span>
          )}
        </label>

        {/* Gece Çalışması */}
        <label style={{
          border: "1px solid var(--line)",
          padding: 14,
          borderRadius: 14,
          cursor: "pointer",
          background: geceCalismasi ? "rgba(255,177,26,.06)" : "white",
          display: "flex",
          alignItems: "center",
          gap: 12
        }}>
          <input
            type="checkbox"
            checked={geceCalismasi}
            onChange={(e) => setGeceCalismasi(e.target.checked)}
            style={{ width: 20, height: 20 }}
          />
          <div>
            <strong style={{ display: "block" }}>Gece Çalışması</strong>
            <span className="form-note" style={{ fontSize: "0.8rem" }}>
              Gece saatlerinde çalışma gerekiyorsa seçiniz (+%5)
            </span>
          </div>
        </label>

        {/* Paket Seçimi - Sadece Pergola grubu için */}
        {needsPackage && (
          <fieldset style={{ border: "none", padding: 0, margin: 0 }}>
            <legend style={{ display: "block", marginBottom: 8, fontWeight: 700, fontSize: "1rem" }}>Restorasyon Paketi / Kirlilik Analizi</legend>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <label style={{
                border: `2px solid ${packageType === "eco" ? "var(--brand)" : "var(--line)"}`,
                padding: 14, borderRadius: 14, cursor: "pointer",
                background: packageType === "eco" ? "rgba(19,179,163,.06)" : "white"
              }}>
                <input type="radio" name="package" value="eco"
                  checked={packageType === "eco"}
                  onChange={() => setPackageType("eco")}
                  style={{ display: "none" }}
                />
                <strong style={{ display: "block", color: "var(--brand-dark)", marginBottom: 4 }}>ECO Bakım</strong>
                <span className="form-note" style={{ fontSize: "0.8rem" }}>Hafif kir, toz, periyodik koruma.</span>
                <span style={{ display: "block", marginTop: 6, fontWeight: 800, color: "var(--brand-dark)", fontSize: "0.95rem" }}>
                  350 TL/m² · Min. 5.250 TL
                </span>
              </label>
              <label style={{
                border: `2px solid ${packageType === "plus" ? "var(--accent)" : "var(--line)"}`,
                padding: 14, borderRadius: 14, cursor: "pointer",
                background: packageType === "plus" ? "rgba(255,177,26,.06)" : "white"
              }}>
                <input type="radio" name="package" value="plus"
                  checked={packageType === "plus"}
                  onChange={() => setPackageType("plus")}
                  style={{ display: "none" }}
                />
                <strong style={{ display: "block", color: "#a96f00", marginBottom: 4 }}>PLUS Restorasyon</strong>
                <span className="form-note" style={{ fontSize: "0.8rem" }}>Ağır is, yağ ve yıllanmış kir tabakası.</span>
                <span style={{ display: "block", marginTop: 6, fontWeight: 800, color: "#a96f00", fontSize: "0.95rem" }}>
                  450 TL/m² · Min. 6.750 TL
                </span>
              </label>
            </div>
          </fieldset>
        )}

        {/* m² alanı - Fiyat Alınız sistemleri hariç */}
        {!showPriceInfo && systemType !== "" && (
          <label htmlFor="area-m2">
            <span style={{ display: "block", marginBottom: 8, fontWeight: 700 }}>Toplam Alan (m²)</span>
            <input
              id="area-m2"
              className="input" type="number" min="1" max="9999" required
              value={m2} onChange={(e) => setM2(e.target.value ? Number(e.target.value) : "")}
              placeholder="Örn: 25"
            />
            {systemType === "zip" && (
              <span className="form-note">0–10 m² arası sabit 2.500 TL, üzeri 250 TL/m²</span>
            )}
          </label>
        )}

        {/* Tahmini fiyat gösterimi */}
        {calculatedPrice !== null && !showPriceInfo && (
          <div aria-live="polite" style={{ padding: 20, background: "rgba(19,179,163,.1)", borderRadius: 14, textAlign: "center", border: "1px solid rgba(19,179,163,.2)" }}>
            <span className="eyebrow" style={{ background: "transparent", color: "var(--brand-dark)", padding: 0 }}>Tahmini Tutar</span>
            <div style={{ fontSize: "2.6rem", fontWeight: 800, color: "var(--text)", lineHeight: 1, marginTop: 8 }}>
              {calculatedPrice.toLocaleString("tr-TR")} TL
            </div>
            {systemType === "pergola" && packageType === "eco" && (m2 as number) <= 15 &&
              <span className="form-note">0–15 m² arası sabit ECO fiyatı geçerlidir.</span>}
            {systemType === "pergola" && packageType === "plus" && (m2 as number) <= 15 &&
              <span className="form-note">0–15 m² arası sabit PLUS fiyatı geçerlidir.</span>}
            {systemType === "zip" && (m2 as number) <= 10 &&
              <span className="form-note">0–10 m² arası sabit ZipPerde fiyatı geçerlidir.</span>}
          </div>
        )}

        {/* Fiyat Alınız ekranı */}
        {showPriceInfo && (
          <div aria-live="polite" style={{ padding: 20, background: "rgba(31,41,55,.05)", borderRadius: 14, textAlign: "center", border: "1px solid rgba(0,0,0,.08)" }}>
            <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text)", lineHeight: 1 }}>Fiyat Alınız</div>
            <span className="form-note" style={{ marginTop: 8, display: "block" }}>
              Bu sistem için keşif yapılarak özel fiyat belirlenmektedir.
            </span>
          </div>
        )}

        {/* Kişisel bilgiler */}
        <div style={{ display: "grid", gap: 14 }}>
          <label htmlFor="quote-name">
            <span style={{ display: "block", marginBottom: 6, fontWeight: 700, fontSize: "0.9rem" }}>Adınız Soyadınız</span>
            <input id="quote-name" className="input" type="text" required value={adSoyad} onChange={e => setAdSoyad(e.target.value)} />
          </label>
          <label htmlFor="quote-phone">
            <span style={{ display: "block", marginBottom: 6, fontWeight: 700, fontSize: "0.9rem" }}>Telefon</span>
            <input id="quote-phone" className="input" type="tel" required value={telefon} onChange={e => setTelefon(e.target.value)} />
          </label>
          <label htmlFor="quote-email">
            <span style={{ display: "block", marginBottom: 6, fontWeight: 700, fontSize: "0.9rem" }}>E-posta (İsteğe Bağlı)</span>
            <input id="quote-email" className="input" type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </label>
        </div>

        {/* Honeypot */}
        <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} aria-hidden="true" autoComplete="off" />

        <button className="btn btn-accent" type="submit" disabled={isLoading}
          style={{ marginTop: 10, minHeight: 56, fontSize: "1.1rem" }}>
          {isLoading ? "Gönderiliyor..." : "Hemen Teklif Al →"}
        </button>

        <p className="form-note" style={{ textAlign: "center" }}>
          Ücretsiz keşif ve fiyat teklifi. Söküm yok, aynı gün hizmet.
        </p>

        {message && (
          <div role="status" style={{
            padding: 14,
            background: message.includes("hata") ? "#fee2e2" : "#dcfce7",
            color: message.includes("hata") ? "#991b1b" : "#166534",
            borderRadius: 12, fontWeight: 500, textAlign: "center"
          }}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
