import Link from "next/link"
import Date from "@/components/Date"
import Seo from "@/components/Seo"
import { getAllPostIds, getPostData } from "../../../lib/posts"

export default function Post({ postData }) {
  return (
    <>
      <Seo
        title={postData.title}
        description={postData.excerpt}
        path={`/posts/${postData.id}`}
        type="article"
        publishedTime={postData.date}
      />
      <main id="main-content">
        <article className="reading-container py-14 sm:py-20">
          <header className="border-b border-line pb-9 sm:pb-12">
            <Link href="/writing" className="text-sm text-muted transition-colors hover:text-ink">
              <span aria-hidden="true">←</span> All writing
            </Link>
            <h1 className="mt-7 text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
              {postData.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm text-muted">
              <Date dateString={postData.date} />
              {postData.tags?.length > 0 && (
                <ul className="flex flex-wrap gap-2" aria-label="Article topics">
                  {postData.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-line px-2.5 py-1 text-xs">
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </header>

          <div
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            className="prose prose-lg mt-10 max-w-none prose-headings:scroll-mt-24 prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-ink prose-p:leading-8 prose-p:text-ink/90 prose-a:text-accent prose-a:decoration-line prose-a:underline-offset-4 hover:prose-a:decoration-accent prose-strong:text-ink prose-blockquote:border-accent prose-blockquote:text-muted prose-code:text-ink prose-pre:border prose-pre:border-line prose-pre:bg-surface prose-li:text-ink/90 dark:prose-invert sm:mt-12"
          />

          <footer className="mt-14 border-t border-line pt-8">
            <Link href="/writing" className="text-sm font-medium text-link">
              <span aria-hidden="true">←</span> Back to all writing
            </Link>
          </footer>
        </article>
      </main>
    </>
  )
}

export function getStaticPaths() {
  return {
    paths: getAllPostIds(),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      postData: await getPostData(params.id),
    },
  }
}
