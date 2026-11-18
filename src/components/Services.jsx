import servicesData from "../data/servicesData";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-secondary text-light border-light/10 relative w-full border-t py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 flex flex-col justify-between gap-6 md:mb-20 lg:flex-row lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="bg-primary h-px w-8" aria-hidden="true" />
              <span className="text-primary font-main text-xs font-medium tracking-[0.35em] uppercase">
                Our Expertise
              </span>
            </div>

            <h2 className="font-serif text-3xl leading-tight font-semibold tracking-wide sm:text-4xl lg:text-5xl">
              Pillars of{" "}
              <span className="text-primary font-normal italic">
                Development
              </span>
            </h2>
          </div>

          <p className="text-light/70 font-main max-w-md text-sm leading-relaxed font-light sm:text-base">
            From concept and structural planning to final architectural
            execution, every project is built to endure across generations.
          </p>
        </div>

        {/* 3-Column Architectural Grid */}
        <div className="border-light/15 grid grid-cols-1 border-t lg:grid-cols-3">
          {servicesData.map((service) => (
            <div
              key={service.number}
              className="group border-light/15 hover:bg-light/2 relative flex flex-col justify-between border-b py-10 transition-colors duration-500 lg:border-r lg:px-10 lg:py-12 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              {/* Animated Top Gold Accent Line on Hover */}
              <span
                className="bg-primary absolute top-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full"
                aria-hidden="true"
              />

              <div>
                {/* Index Number & Category */}
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-primary font-serif text-2xl font-medium tracking-widest">
                    {service.number}
                  </span>
                  <span className="text-light/50 font-main text-[10px] font-medium tracking-[0.3em] uppercase">
                    {service.category}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-light group-hover:text-primary mb-4 font-serif text-xl font-semibold tracking-wide transition-colors duration-300 sm:text-2xl">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-light/70 font-main text-sm leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              {/* Subtle Bottom Architectural Detail */}
              <div className="mt-10 flex items-center gap-3">
                <span
                  className="bg-primary/40 group-hover:bg-primary h-px w-6 transition-all duration-300 group-hover:w-12"
                  aria-hidden="true"
                />
                <span className="text-light/40 group-hover:text-light/80 font-main text-[10px] tracking-[0.25em] uppercase transition-colors duration-300">
                  Barakaal Standard
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
