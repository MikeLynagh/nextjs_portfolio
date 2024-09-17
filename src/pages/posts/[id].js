import { getAllPostIds, getPostData } from "../../../lib/posts"
import Head from "next/head"
import Date from "@/components/Date"
import Link from "next/link"

export default function Post({ postData }) {
    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Head>
                <title>{postData.title}</title>
            </Head>
            <main className="py-12">
                <article className="prose lg:prose-lg dark:prose-invert mx-auto">
                    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
                        {postData.title}
                    </h1>
                    <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400 mb-8">
                        <Date dateString={postData.date} />
                        {postData.tags && (
                            <div className="flex flex-wrap gap-2">
                                {postData.tags.map(tag => (
                                    <span key={tag} className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                    <div 
                        dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
                        className="text-gray-800 dark:text-gray-200"
                    />
                </article>
                <div className="mt-12 text-center">
                    <Link href="/articles" className="text-blue-600 dark:text-blue-400 hover:underline">
                        ← Back to articles
                    </Link>
                </div>
            </main>
        </div>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData,
        },
    }
}