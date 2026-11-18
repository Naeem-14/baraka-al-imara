const highlights = [
  {
    metric: "100%",
    label: "Architectural Precision",
  },
  {
    metric: "Prime",
    label: "Strategic Locations",
  },
  {
    metric: "Enduring",
    label: "Structural Quality",
  }
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-secondary text-light border-light/10 relative w-full border-t py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Architectural Visual & Framed Seal */}
          <div className="relative lg:col-span-5">
            <div className="border-light/15 relative aspect-3/2 w-full overflow-hidden border md:aspect-4/5">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                alt="Architectural interior craftsmanship"
                className="h-full w-full object-cover object-center brightness-90"
              />
              <div
                className="from-secondary/80 to-secondary/30 absolute inset-0 bg-linear-to-t via-transparent"
                aria-hidden="true"
              />
            </div>

            {/* Overlapping Architectural Corner Accent */}
            <div className="bg-secondary border-primary/50 mt-6 border p-6 sm:absolute sm:-right-8 sm:-bottom-8 sm:mt-0 sm:max-w-65 sm:p-7">
              <span className="text-primary font-main block text-[10px] font-medium tracking-[0.35em] uppercase">
                Our Philosophy
              </span>
              <p className="text-light mt-2 font-serif text-base leading-snug tracking-wide">
                “True luxury is measured in permanence, proportion, and quiet
                refinement.”
              </p>
            </div>
          </div>

          {/* Right Column: Brand Story & Core Pillars */}
          <div className="lg:col-span-7 lg:pl-6">
            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-3">
              <span className="bg-primary h-px w-8" aria-hidden="true" />
              <span className="text-primary font-main text-xs font-medium tracking-[0.35em] uppercase">
                About The Firm
              </span>
            </div>

            {/* Heading */}
            <h2 className="mb-6 font-serif text-3xl leading-tight font-semibold tracking-wide sm:text-4xl lg:text-5xl">
              Built on Integrity,{" "}
              <span className="text-primary font-normal italic">
                Guided by Vision
              </span>
            </h2>

            {/* Narrative Paragraphs */}
            <div className="text-light/75 font-main space-y-5 text-sm leading-relaxed font-light sm:text-base">
              <p>
                Baraka Al Imra Developments was founded with a singular
                ambition: to elevate the urban landscape through thoughtful,
                enduring architecture. We approach every site not merely as a
                construction project, but as a long-term contribution to the
                communities we serve.
              </p>
              <p>
                By uniting disciplined engineering, timeless material palettes,
                and meticulous attention to spatial flow, we create residential
                and commercial environments that retain their distinction for
                decades to come.
              </p>
            </div>

            {/* Architectural Hairline Metrics Strip */}
            <div className="border-light/15 mt-10 grid grid-cols-1 gap-6 border-t pt-8 sm:grid-cols-3 sm:gap-8">
              {highlights.map((item) => (
                <div key={item.label} className="flex flex-col">
                  <span className="text-primary font-serif text-2xl font-semibold tracking-wider sm:text-3xl">
                    {item.metric}
                  </span>
                  <span className="text-light/60 font-main mt-1.5 text-[11px] font-medium tracking-[0.22em] uppercase">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Signature Sign-off */}
            <div className="mt-10 flex items-center gap-4">
              <span className="bg-primary/50 h-px w-10" aria-hidden="true" />
              <span className="text-light/85 font-serif text-xs tracking-[0.28em] uppercase">
                Baraka Al Imra Developments
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
