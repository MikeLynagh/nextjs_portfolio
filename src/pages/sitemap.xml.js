import { getSortedPostsData } from "../../lib/posts"

const SITE_URL = "https://www.mikelynagh.com"

function buildSitemap(posts) {
  const pages = ["", "/work", "/writing", "/about"]
  const urls = [
    ...pages.map((path) => `<url><loc>${SITE_URL}${path || "/"}</loc></url>`),
    ...posts.map((post) => (
      `<url><loc>${SITE_URL}/posts/${post.id}</loc>${post.date ? `<lastmod>${post.date}</lastmod>` : ""}</url>`
    )),
  ]

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  ${urls.join("\n  ")}\n</urlset>`
}

export function getServerSideProps({ res }) {
  res.setHeader("Content-Type", "text/xml")
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=604800")
  res.write(buildSitemap(getSortedPostsData()))
  res.end()

  return { props: {} }
}

export default function Sitemap() {
  return null
}
