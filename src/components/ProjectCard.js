import Image from "next/image"
import Link from "next/link"

export default function ProjectCard({ project, featured = false, headingLevel = "h3" }) {
  const Heading = headingLevel

  return (
    <article className={`border-t border-line py-8 ${featured ? "sm:py-10" : ""}`}>
      <div className={project.image ? "grid gap-6 md:grid-cols-[1.1fr_1fr] md:gap-10" : "max-w-3xl"}>
        {project.image && (
          <div className="overflow-hidden rounded-xl border border-line bg-surface">
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="aspect-[3/2] h-full w-full object-cover"
            />
          </div>
        )}
        <div className="flex flex-col justify-center">
          <p className="eyebrow">{project.label}</p>
          <Heading className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{project.title}</Heading>
          <p className="mt-4 leading-7 text-muted">{project.description}</p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
            {project.technologies.map((technology) => (
              <li key={technology} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                {technology}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
            {project.links.map(({ href, label }) => {
              const external = href.startsWith("http")
              const className = "text-link"
              return external ? (
                <a key={label} href={href} target="_blank" rel="noreferrer" className={className}>
                  {label} <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <Link key={label} href={href} className={className}>
                  {label} <span aria-hidden="true">→</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </article>
  )
}
