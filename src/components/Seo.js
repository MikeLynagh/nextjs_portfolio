import Head from "next/head"

const SITE_URL = "https://www.mikelynagh.com"
const DEFAULT_DESCRIPTION = "Mike Lynagh is a software engineer in Galway, Ireland, working across production software, integrations and applied AI."

export default function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  type = "website",
  publishedTime,
  noindex = false,
}) {
  const pageTitle = title ? `${title} — Mike Lynagh` : "Mike Lynagh — Software engineer in Galway"
  const canonical = `${SITE_URL}${path}`
  const image = `${SITE_URL}/images/profile/Selfie.jpeg`
  const structuredData = type === "article"
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        datePublished: publishedTime,
        mainEntityOfPage: canonical,
        author: { "@type": "Person", name: "Mike Lynagh", url: SITE_URL },
      }
    : path === "/"
      ? {
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Mike Lynagh",
          url: SITE_URL,
          jobTitle: "Associate Software Engineer",
          sameAs: [
            "https://github.com/MikeLynagh",
            "https://www.linkedin.com/in/michael-lynagh/",
          ],
        }
      : null

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Mike Lynagh" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="Mike Lynagh" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  )
}
