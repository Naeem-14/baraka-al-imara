import logo from "../assets/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-secondary text-light border-light/15 w-full border-t"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row md:px-12">
        {/* Brand Lockup */}
        <div className="flex items-center gap-3.5">
          <img
            src={logo}
            alt="Baraka Al Imra Developments"
            className="h-9 w-auto object-contain"
          />
          <span className="bg-primary/40 h-6 w-px" aria-hidden="true" />
          <div className="flex flex-col">
            <span className="text-light font-serif text-xs font-semibold tracking-[0.2em] uppercase sm:text-sm">
              Baraka Al Imra
            </span>
            <span className="text-primary font-main text-[8px] font-medium tracking-[0.38em] uppercase sm:text-[9px]">
              Developments
            </span>
          </div>
        </div>

        {/* Direct Inquiry Email */}
        <a
          href="mailto:info@barakaalimra.com"
          className="text-light/75 hover:text-primary font-main text-xs tracking-[0.2em] uppercase transition-colors"
        >
          info@barakaalimra.com
        </a>

        {/* Copyright */}
        <p className="text-light/45 font-main text-[10px] tracking-[0.18em] uppercase sm:text-[11px]">
          &copy; {currentYear} Baraka Al Imra Developments
        </p>
      </div>
    </footer>
  );
}
