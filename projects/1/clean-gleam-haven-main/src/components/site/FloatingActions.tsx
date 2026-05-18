const wa = "https://wa.me/905367731404?text=Merhaba%20PergoClean%2C%20teklif%20almak%20istiyorum.";
const ig = "https://www.instagram.com/pergoclean.tr";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={wa}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp ile yaz"
        className="pulse-ring grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-premium transition hover:scale-110"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
          <path d="M20.5 3.5A11.7 11.7 0 0 0 12 0C5.4 0 0 5.4 0 12a11.9 11.9 0 0 0 1.7 6.2L0 24l5.9-1.6A12 12 0 0 0 12 24c6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.5zM12 21.8a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.5 1 .9-3.4-.2-.4A9.8 9.8 0 1 1 21.8 12 9.9 9.9 0 0 1 12 21.8zm5.4-7.4c-.3-.2-1.7-.9-2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.6-2c-.2-.3 0-.5.1-.6l.5-.6.3-.6a.6.6 0 0 0 0-.5c0-.2-.6-1.6-.9-2.2s-.5-.5-.7-.5h-.6a1 1 0 0 0-.8.4 3 3 0 0 0-1 2.3c0 1.4 1 2.7 1.1 2.9a11 11 0 0 0 4.3 3.8c.6.3 1.1.4 1.5.6a3.6 3.6 0 0 0 1.6.1c.5-.1 1.6-.7 1.8-1.3s.3-1.2.2-1.3-.3-.2-.6-.4z" />
        </svg>
      </a>
      <a
        href={ig}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className="grid h-14 w-14 place-items-center rounded-full text-white shadow-premium transition hover:scale-110"
        style={{ background: "linear-gradient(135deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)" }}
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
        </svg>
      </a>
    </div>
  );
}
