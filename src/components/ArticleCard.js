import Link from "next/link"
import Date from "./Date"

export default function ArticleCard({ post, compact = false, headingLevel = "h3" }) {
  const Heading = headingLevel

  return (
    <article className="group border-t border-line py-6 sm:py-7">
      <div className={compact ? "" : "sm:grid sm:grid-cols-[9rem_1fr] sm:gap-8"}>
        <div className="mb-2 text-sm text-muted sm:mb-0">
          <Date dateString={post.date} />
        </div>
        <div>
          <Heading className="text-lg font-semibold tracking-tight sm:text-xl">
            <Link
              href={`/posts/${post.id}`}
              className="transition-colors group-hover:text-accent"
            >
              {post.title}
            </Link>
          </Heading>
          {post.excerpt && (
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
              {post.excerpt}
            </p>
          )}
          {post.tags?.length > 0 && (
            <ul className="mt-3 flex flex-wrap gap-2" aria-label="Article topics">
              {post.tags.map((tag) => (
                <li key={tag} className="rounded-full border border-line px-2.5 py-1 text-xs text-muted">
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  )
}
