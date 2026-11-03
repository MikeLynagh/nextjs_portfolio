import Link from "next/link"
import Layout from "@/components/Layout"
import Seo from "@/components/Seo"

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="This page could not be found." path="/404" noindex />
      <main id="main-content">
        <Layout className="py-24 sm:py-36">
          <div className="max-w-xl">
            <p className="eyebrow">404</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Nothing here.</h1>
            <p className="mt-5 text-lg leading-8 text-muted">The page may have moved, or the link might be out of date.</p>
            <Link href="/" className="mt-7 inline-block text-sm font-medium text-link">Back home <span aria-hidden="true">→</span></Link>
          </div>
        </Layout>
      </main>
    </>
  )
}
