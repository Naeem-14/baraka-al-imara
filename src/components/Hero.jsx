import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="bg-secondary relative flex min-h-screen w-full flex-col justify-between overflow-hidden">
      {/* Background Image with Architectural Framing */}
      <img
        src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        alt="Modern architectural facade"
        className="absolute inset-0 h-full w-full scale-105 object-cover object-center brightness-90"
      />

      {/* Multi-Layered Vignette Overlay for Contrast & Mood */}
      <div
        className="from-dark via-secondary/45 to-secondary/75 absolute inset-0 bg-linear-to-t"
        aria-hidden="true"
      />
      <div
        className="bg-secondary/25 absolute inset-0 backdrop-blur-[1px]"
        aria-hidden="true"
      />

      {/* Top Centered Brand Header */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Bottom Editorial Content Section */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-12 md:px-12 md:pb-16">
        {/* Subtle Gold Eyebrow Label */}
        <div className="mb-4 flex items-center gap-3">
          <span className="bg-primary h-px w-8" aria-hidden="true" />
          <span className="text-primary font-main text-xs font-medium tracking-[0.35em] uppercase">
            Architectural Excellence
          </span>
        </div>

        {/* Main Split Grid */}
        <div className="border-light/15 flex flex-col justify-between gap-8 border-t pt-8 lg:flex-row lg:items-end lg:gap-16">
          {/* Left: Primary Headline */}
          <h1 className="text-light max-w-2xl font-serif text-3xl leading-[1.15] font-semibold tracking-wide sm:text-5xl lg:text-6xl">
            Crafting Landmarks of{" "}
            <span className="text-primary font-normal">Lasting Value</span>
          </h1>

          {/* Right: Description & CTA */}
          <div className="flex max-w-md flex-col items-start gap-6">
            <p className="text-light/80 font-main text-sm leading-relaxed font-light sm:text-base">
              Barakaal Emara Developments shapes distinguished residential and
              commercial spaces defined by architectural precision, enduring
              quality, and refined modern living.
            </p>

            <button
              type="button"
              className="group border-primary bg-primary/10 text-light hover:bg-primary hover:text-secondary font-main inline-flex cursor-pointer items-center gap-4 border px-7 py-3.5 text-xs font-medium tracking-[0.25em] uppercase transition-all duration-300"
            >
              <span>Discuss Project</span>
              <span
                className="transition-transform duration-300 group-hover:translate-x-1.5"
                aria-hidden="true"
              >
                &rarr;
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
