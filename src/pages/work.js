import Layout from "@/components/Layout"
import ProjectCard from "@/components/ProjectCard"
import Seo from "@/components/Seo"
import { projects } from "@/data/projects"

export default function Work() {
  return (
    <>
      <Seo
        title="Work"
        description="Independent projects, applied AI experiments and selected work by Mike Lynagh."
        path="/work"
      />
      <main id="main-content">
        <Layout className="py-14 sm:py-20">
          <header className="max-w-3xl">
            <p className="eyebrow">Work</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-6xl">Software built around real problems.</h1>
            <p className="mt-6 text-lg leading-8 text-muted sm:text-xl sm:leading-9">
              A small collection of independent products and team projects. Some are useful experiments, some are still evolving, and each one taught me something worth carrying into the next build.
            </p>
          </header>

          <section className="mt-14 sm:mt-20" aria-label="Selected projects">
            {projects.map((project, index) => (
              <div key={project.slug} id={project.slug}>
                <ProjectCard project={project} featured={index === 0} headingLevel="h2" />
                <div className="grid gap-6 pb-10 text-sm leading-7 text-muted sm:grid-cols-2 sm:gap-10 sm:pb-14">
                  <div>
                    <h3 className="font-semibold text-ink">The problem</h3>
                    <p className="mt-2">{project.problem}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink">The approach</h3>
                    <p className="mt-2">{project.approach}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section className="mt-10 grid gap-8 border-t border-line pt-10 sm:mt-16 sm:grid-cols-[1fr_1.5fr] sm:pt-14">
            <div>
              <p className="eyebrow">Professional work</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">Liberty IT</h2>
              <p className="mt-2 text-sm text-muted">Associate Software Engineer · Galway</p>
            </div>
            <div className="space-y-4 leading-7 text-muted">
              <p>
                My day-to-day work spans production software engineering, backend and frontend development, integrations and applied AI. I work with technologies including React, TypeScript, Python, NestJS, GraphQL and AWS.
              </p>
              <p>
                I&apos;ve also contributed to AI workshops, hackathons, technical presentations and practical AI adoption initiatives. Employer work stays intentionally high-level here: this site is for public work and lessons I can share responsibly.
              </p>
            </div>
          </section>
        </Layout>
      </main>
    </>
  )
}
