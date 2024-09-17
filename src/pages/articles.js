import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Link from "next/link";
import Date from "../components/Date";

import { getSortedPostsData } from "../../lib/posts";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return{
        props: {
            allPostsData,
        }
    }
}

export default function articles({ allPostsData}){
    return(
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Head>
            <title>Blog Articles</title>
          </Head>
          <main className="py-12">
                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-8">Blog Articles</h1>
                <ul className="space-y-8">
                    {allPostsData.map(({ id, date, title, tags }) => (
                        <li key={id} className="border-b border-gray-200 dark:border-gray-700 pb-6">
                            <article>
                                <h2 className="text-2xl font-bold mb-2">
                                    <Link href={`/posts/${id}`} className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400">
                                        {title}
                                    </Link>
                                </h2>
                                <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                    {date ? <Date dateString={date} /> : <span>No date available</span>}
                                </div>
                                {tags && (
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {tags.map(tag => (
                                            <span key={tag} className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                {/* If you have a summary or excerpt, you can add it here */}
                                {/* <p className="text-gray-600 dark:text-gray-300">{summary}</p> */}
                            </article>
                        </li>
                    ))}
                </ul>
            </main>

        </div>
    )
}


