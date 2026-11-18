import projectsData from "../data/projectsData";

export default function Projects() {
  const featuredProject = projectsData.find((p) => p.featured);
  const secondaryProjects = projectsData.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="bg-secondary text-light border-light/10 relative w-full border-t py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 flex flex-col justify-between gap-6 md:mb-20 lg:flex-row lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="bg-primary h-px w-8" aria-hidden="true" />
              <span className="text-primary font-main text-xs font-medium tracking-[0.35em] uppercase">
                Selected Works
              </span>
            </div>

            <h2 className="font-serif text-3xl leading-tight font-semibold tracking-wide sm:text-4xl lg:text-5xl">
              Signature{" "}
              <span className="text-primary font-normal italic">
                Developments
              </span>
            </h2>
          </div>

          <p className="text-light/70 font-main max-w-md text-sm leading-relaxed font-light sm:text-base">
            A curated portfolio of residential landmarks and commercial spaces
            defined by timeless proportions and structural integrity.
          </p>
        </div>

        {/* Flagship Featured Project */}
        {featuredProject && (
          <article className="group border-light/15 mb-14 border-b pb-14">
            <div className="bg-dark relative aspect-8/5 w-full overflow-hidden md:aspect-21/9">
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="h-full w-full object-cover object-center brightness-90 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Subtle Vignette */}
              <div
                className="from-secondary/85 via-secondary/20 absolute inset-0 bg-linear-to-t to-transparent"
                aria-hidden="true"
              />

              {/* Top Left Status Pill */}
              <div className="bg-secondary/85 border-primary/40 text-primary font-main absolute top-5 left-5 border px-4 py-1.5 text-[10px] font-medium tracking-[0.25em] uppercase backdrop-blur-xs">
                {featuredProject.status}
              </div>

              {/* Bottom Right Index Number */}
              <span className="text-light/25 absolute right-6 bottom-5 hidden font-serif text-5xl font-semibold tracking-widest sm:block">
                {featuredProject.id}
              </span>
            </div>

            {/* Featured Project Details */}
            <div className="mt-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <div className="text-primary font-main mb-2 flex items-center gap-3 text-xs font-medium tracking-[0.25em] uppercase">
                  <span>{featuredProject.category}</span>
                  <span className="text-light/30">&bull;</span>
                  <span className="text-light/60">
                    {featuredProject.location}
                  </span>
                </div>

                <h3 className="text-light group-hover:text-primary font-serif text-2xl font-semibold tracking-wide transition-colors duration-300 sm:text-3xl">
                  {featuredProject.title}
                </h3>
              </div>

              <p className="text-light/70 font-main max-w-xl text-sm leading-relaxed font-light">
                {featuredProject.description}
              </p>
            </div>
          </article>
        )}

        {/* Secondary Projects 2-Column Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-14">
          {secondaryProjects.map((project) => (
            <article key={project.id} className="group flex flex-col">
              {/* Image Container */}
              <div className="bg-dark relative aspect-16/11 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-center brightness-90 transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  className="from-secondary/80 absolute inset-0 bg-linear-to-t via-transparent to-transparent"
                  aria-hidden="true"
                />

                {/* Status Badge */}
                <div className="bg-secondary/85 border-light/15 text-light/90 font-main absolute top-4 left-4 border px-3.5 py-1 text-[10px] font-medium tracking-[0.25em] uppercase backdrop-blur-xs">
                  {project.status}
                </div>

                {/* Year Tag */}
                <div className="text-primary absolute right-4 bottom-4 font-serif text-sm tracking-widest">
                  {project.year}
                </div>
              </div>

              {/* Project Metadata */}
              <div className="border-light/15 mt-6 flex flex-1 flex-col justify-between border-b pb-8">
                <div>
                  <div className="text-primary font-main mb-2 flex items-center gap-2.5 text-[11px] font-medium tracking-[0.25em] uppercase">
                    <span>{project.category}</span>
                    <span className="text-light/30">&bull;</span>
                    <span className="text-light/60">{project.location}</span>
                  </div>

                  <h3 className="text-light group-hover:text-primary mb-3 font-serif text-xl font-semibold tracking-wide transition-colors duration-300 sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="text-light/70 font-main text-sm leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Architectural Rule */}
                <div className="mt-6 flex items-center gap-3">
                  <span
                    className="bg-primary/40 group-hover:bg-primary h-px w-6 transition-all duration-300 group-hover:w-12"
                    aria-hidden="true"
                  />
                  <span className="text-light/40 group-hover:text-light/80 font-main text-[10px] tracking-[0.25em] uppercase transition-colors duration-300">
                    Project {project.id}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
