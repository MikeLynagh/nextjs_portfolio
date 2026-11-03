import Image from "next/image"
import Link from "next/link"
import Layout from "@/components/Layout"
import Seo from "@/components/Seo"
import profilePic from "../../public/images/profile/Selfie.jpeg"

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="About Mike Lynagh, a software engineer based in Galway, Ireland."
        path="/about"
      />
      <main id="main-content">
        <Layout className="py-14 sm:py-20">
          <header className="max-w-3xl">
            <p className="eyebrow">About</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-6xl">About Mike Lynagh</h1>
          </header>

          <div className="mt-12 grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.8fr)] md:gap-14 lg:gap-20">
            <div className="space-y-6 text-lg leading-8 text-muted">
              <p>
                Hi, I&apos;m Mike. I&apos;m a software engineer based in Galway, Ireland, where I work at Liberty IT. I live here with my wife and our two children.
              </p>
              <p>
                I didn&apos;t take the most direct route into software. Before this, I worked as a physiotherapist. I enjoyed the problem-solving side of that job: listening properly, working out what was going on and finding a practical way forward. After becoming interested in programming, I went back to university as a mature student and spent a few years learning while still working. In 2025, I made the move into software engineering.
              </p>
              <p>
                Since joining Liberty IT, I&apos;ve worked across frontend and backend development, integrations and production software. More recently, a lot of my curiosity has been around applied AI: where it is genuinely useful, how teams can adopt it in a practical way and what it changes about building software. I&apos;ve contributed to workshops, hackathons and technical presentations, and I was part of a team that won the National AI Challenge.
              </p>
              <p>
                Outside work, I like building things of my own. One of those is <Link href="/work#physioagent" className="text-link text-ink">PhysioAgent</Link>, an experimental application that brings together my previous experience in physiotherapy and what I&apos;m learning about AI product development. It is still an experiment, which is part of the appeal. Building small products is a good way to find the gaps between an idea that sounds useful and software that is actually useful.
              </p>
              <p>
                This website is my little home on the internet. I use it to write about software, AI, books, career changes, projects and whatever else I want to think through. I&apos;m not trying to turn every interest into a professional identity. I mainly want a place to keep useful things, share what I learn and look back at how my thinking changes over time.
              </p>
              <p>
                Most of my time goes to family and exercise. Life with two children is busy.
              </p>
            </div>

            <div className="md:order-last">
              <div className="overflow-hidden rounded-2xl border border-line bg-surface p-2">
                <Image
                  src={profilePic}
                  alt="Mike Lynagh"
                  priority
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, 36vw"
                  className="aspect-[4/5] w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>

        </Layout>
      </main>
    </>
  )
}
