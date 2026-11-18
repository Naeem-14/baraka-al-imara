import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <header className="from-secondary/95 via-secondary/60 fixed top-0 left-0 z-50 w-full bg-linear-to-b to-transparent">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-6 md:py-8">
        {/* Brand Emblem & Lockup */}
        <div className="flex flex-col items-center text-center sm:flex-row sm:gap-5 sm:text-left">
          <img
            src={logo}
            alt="Baraka Al Imra Developments"
            className="mr-2 h-14 w-auto object-contain sm:-mr-4 md:h-16"
          />

          {/* Vertical Gold Divider (Desktop/Tablet) */}
          <span
            className="bg-primary/40 hidden h-10 w-px sm:block"
            aria-hidden="true"
          />

          {/* Horizontal Gold Divider (Mobile) */}
          <span
            className="bg-primary/40 my-2 -ml-2 h-px w-12 sm:hidden"
            aria-hidden="true"
          />

          {/* Stacked Brand Typography */}
          <div className="flex flex-col">
            <h1 className="text-light font-serif text-2xl font-semibold uppercase sm:text-xl md:text-2xl">
              Baraka Al Imra
            </h1>
            <span className="text-primary font-main mt-1 text-[10px] font-medium tracking-[0.42em] uppercase sm:text-xs">
              Developments
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
