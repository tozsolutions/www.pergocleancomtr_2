import logo from "@/assets/brand/logo.png";
import { Link } from "@tanstack/react-router";
import { ankaraDistricts, antalyaDistricts } from "@/lib/locations";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="PergoClean" className="h-10 w-10 object-contain" />
            <div>
              <div className="font-display font-bold">PergoClean</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Bakım • Temizlik • Restorasyon</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            19+ yıllık üretim ve montaj tecrübesinden gelen profesyonel pergola bakım ve restorasyon markası.
          </p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Hizmetler</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Pergola Kumaş Temizliği</li>
            <li>BioClimatic / RollingRoof</li>
            <li>Wintent — Zip Perde</li>
            <li>Güneş Panel Temizliği</li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Hizmet Bölgeleri</div>
          <div className="mt-4 space-y-4 text-xs">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[color:var(--aqua)]">Ankara</div>
              <ul className="mt-1.5 flex flex-wrap gap-x-2 gap-y-1 leading-relaxed text-muted-foreground">
                {ankaraDistricts.map((d, i) => (
                  <li key={d.slug} className="flex items-center gap-2">
                    <Link to="/bolge/$slug" params={{ slug: d.slug }} className="transition hover:text-[color:var(--aqua)]">
                      {d.name}
                    </Link>
                    {i < ankaraDistricts.length - 1 && <span aria-hidden>·</span>}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[color:var(--aqua)]">Antalya</div>
              <ul className="mt-1.5 flex flex-wrap gap-x-2 gap-y-1 leading-relaxed text-muted-foreground">
                {antalyaDistricts.map((d, i) => (
                  <li key={d.slug} className="flex items-center gap-2">
                    <Link to="/bolge/$slug" params={{ slug: d.slug }} className="transition hover:text-[color:var(--aqua)]">
                      {d.name}
                    </Link>
                    {i < antalyaDistricts.length - 1 && <span aria-hidden>·</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">İletişim</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>+90 536 773 14 04</li>
            <li>+90 530 955 00 28</li>
            <li>pergoclean@tozyapi.com.tr</li>
            <li>www.pergoclean.com.tr</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} PergoClean. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
