import Image from "next/image"
import Link from "next/link"
import ArticleCard from "@/components/ArticleCard"
import Layout from "@/components/Layout"
import ProjectCard from "@/components/ProjectCard"
import Seo from "@/components/Seo"
import { projects } from "@/data/projects"
import { getSortedPostsData } from "../../lib/posts"
import profilePic from "../../public/images/profile/Selfie.jpeg"

export default function Home({ selectedPosts }) {
  return (
    <>
      <Seo />
      <main id="main-content">
        <Layout className="py-14 sm:py-20 lg:py-28">
          <section className="grid items-center gap-10 md:grid-cols-[1fr_18rem] lg:grid-cols-[1fr_22rem] lg:gap-20">
            <div className="max-w-3xl">
              <p className="eyebrow">Software engineer · Galway, Ireland</p>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                Software engineer building useful products across full-stack development and AI.
              </h1>
              <div className="mt-7 max-w-2xl space-y-4 text-lg leading-8 text-muted sm:text-xl sm:leading-9">
                <p>
                  I&apos;m Mike, an Associate Software Engineer at Liberty IT. My work spans production software, integrations, frontend and backend development, and practical uses of AI.
                </p>
                <p>
                  Away from work, I like experimenting with technology, building products and writing about what I learn along the way.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
                <Link href="/work" className="text-link">See my work <span aria-hidden="true">→</span></Link>
                <Link href="/writing" className="text-link">Read my writing <span aria-hidden="true">→</span></Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[18rem] md:max-w-none">
              <div className="overflow-hidden rounded-2xl border border-line bg-surface p-2">
                <Image
                  src={profilePic}
                  alt="Mike Lynagh"
                  priority
                  placeholder="blur"
                  sizes="(max-width: 768px) 288px, 352px"
                  className="aspect-[4/5] w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </section>
        </Layout>

        <section className="border-y border-line bg-surface/50">
          <Layout className="grid gap-8 py-8 text-sm sm:grid-cols-3 sm:py-10">
            <div>
              <p className="font-semibold text-ink">At work</p>
              <p className="mt-1 leading-6 text-muted">Building production software and exploring practical AI adoption.</p>
            </div>
            <div>
              <p className="font-semibold text-ink">Previously</p>
              <p className="mt-1 leading-6 text-muted">I worked as a physiotherapist before moving into software engineering in 2025.</p>
            </div>
            <div>
              <p className="font-semibold text-ink">Along the way</p>
              <p className="mt-1 leading-6 text-muted">Part of a team that won Ireland&apos;s National AI Challenge.</p>
            </div>
          </Layout>
        </section>

        <Layout className="py-16 sm:py-24">
          <section aria-labelledby="selected-work">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="eyebrow">Selected work</p>
                <h2 id="selected-work" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Things I&apos;ve built</h2>
              </div>
              <Link href="/work" className="hidden text-sm font-medium sm:block">All work <span aria-hidden="true">→</span></Link>
            </div>
            <div className="mt-8">
              {projects.slice(0, 2).map((project, index) => (
                <ProjectCard key={project.slug} project={project} featured={index === 0} />
              ))}
            </div>
            <Link href="/work" className="mt-3 inline-block text-sm font-medium sm:hidden">All work <span aria-hidden="true">→</span></Link>
          </section>

          <section aria-labelledby="selected-writing" className="mt-20 sm:mt-28">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="eyebrow">Selected writing</p>
                <h2 id="selected-writing" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Notes and longer thoughts</h2>
              </div>
              <Link href="/writing" className="hidden text-sm font-medium sm:block">All writing <span aria-hidden="true">→</span></Link>
            </div>
            <div className="mt-8 border-b border-line">
              {selectedPosts.map((post) => <ArticleCard key={post.id} post={post} />)}
            </div>
            <Link href="/writing" className="mt-6 inline-block text-sm font-medium sm:hidden">All writing <span aria-hidden="true">→</span></Link>
          </section>

          <section className="mt-20 max-w-3xl border-t border-line pt-10 sm:mt-28 sm:pt-12">
            <p className="eyebrow">A little context</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Different work, same curiosity.</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Moving from physiotherapy into software changed the tools I use, but not the part I enjoy most: understanding a problem, making something useful and explaining it clearly. These days I&apos;m especially interested in applied AI, product engineering and what small teams can build with good software.
            </p>
            <Link href="/about" className="mt-6 inline-block text-sm font-medium text-link">More about me <span aria-hidden="true">→</span></Link>
          </section>
        </Layout>
      </main>
    </>
  )
}

export function getStaticProps() {
  return {
    props: {
      selectedPosts: getSortedPostsData().slice(0, 3),
    },
  }
}
