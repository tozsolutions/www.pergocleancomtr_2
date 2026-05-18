"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { logo } from "@/assets";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#hizmetler", label: "Hizmetler" },
    { href: "#fiyat", label: "Anında Fiyat" },
    { href: "#once-sonra", label: "Önce / Sonra" },
    { href: "#surec", label: "Süreç" },
    { href: "#blog", label: "Blog" },
    { href: "#iletisim", label: "İletişim" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between rounded-2xl px-4 py-2 transition-all duration-500 ${scrolled ? "glass-light shadow-premium" : ""}`}>
          <a href="#top" className="flex items-center gap-3">
            <Image
              src={logo}
              alt="PergoClean logo"
              width={48}
              height={48}
              className="drop-shadow-[0_4px_18px_rgba(40,90,200,0.45)]"
            />
            <div className="leading-tight">
              <div className="font-bold text-foreground">PergoClean</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Bakım • Temizlik • Restorasyon</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 transition hover:text-[color:var(--aqua)]">{l.label}</a>
            ))}
          </nav>

          <a href="#fiyat" className="hidden rounded-full bg-aqua-grad px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:scale-105 lg:inline-flex">
            Anında Fiyat Al
          </a>

          <button aria-label="Menü" onClick={() => setOpen((v) => !v)} className="lg:hidden rounded-lg border border-border p-2">
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="mt-1 block h-0.5 w-5 bg-foreground" />
            <span className="mt-1 block h-0.5 w-5 bg-foreground" />
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl glass-light p-4 lg:hidden">
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium">{l.label}</a>
              ))}
              <a href="#fiyat" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-aqua-grad px-5 py-2.5 text-center text-sm font-semibold text-white">
                Anında Fiyat Al
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}