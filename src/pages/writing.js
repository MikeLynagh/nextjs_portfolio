import ArticleCard from "@/components/ArticleCard"
import Layout from "@/components/Layout"
import Seo from "@/components/Seo"
import { getSortedPostsData } from "../../lib/posts"

export default function Writing({ posts }) {
  return (
    <>
      <Seo
        title="Writing"
        description="Writing by Mike Lynagh about software, AI, books, career changes, experiments and personal interests."
        path="/writing"
      />
      <main id="main-content">
        <Layout className="py-14 sm:py-20">
          <header className="max-w-3xl">
            <p className="eyebrow">Writing</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-6xl">Things I wanted to think through.</h1>
            <p className="mt-6 text-lg leading-8 text-muted sm:text-xl sm:leading-9">
              Notes on software, AI, books, changing careers, projects and whatever else seems worth writing down. This is an archive, not a content calendar.
            </p>
          </header>

          <section className="mt-14 border-b border-line sm:mt-20" aria-label="All articles">
            {posts.map((post) => <ArticleCard key={post.id} post={post} headingLevel="h2" />)}
          </section>
        </Layout>
      </main>
    </>
  )
}

export function getStaticProps() {
  return {
    props: {
      posts: getSortedPostsData(),
    },
  }
}
