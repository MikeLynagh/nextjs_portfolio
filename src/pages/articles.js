import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/AnimatedText";
import article1 from "../../public/images/articles/pagination component in reactjs.jpg"
import article2 from "../../public/images/articles/create loading screen in react js.jpg"
import {motion} from "framer-motion"
import TransitionEffect from "@/components/hooks/TransitionEffect";


const FramerImage = motion(Image)

const Article = ({img, title, date,summary, link}) => {
    return(
        <li className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center
        justify-between bg-light text-dark first:mt-0 border border-solid border-dark sm:flex-col
        ">
            <Link href={link} target="_blank">
            <h4 className="capitalize text-xl font-semibold hover: underline">{title}</h4>
            </Link>
            <span className="text-primary font-semibold pl-4 sm:self-start sm:pl-0">{date}</span>
            
        </li>
    )
}


const FeaturedArticle = ({img, title, time, summary, link}) => {
    return(
        <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl">
            <Link 
            href={link}
            target="_blank"
            className="w=full inline-block cursor-pointer overflow-hidden rounded-lg"
            >
                <FramerImage src={img} alt={title} className="w-full h-auto" 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes='(max-width: 768px) 100vw, (max-width:1200px) 50vw, 
                50vw'
                
                />
            </Link>
            <Link href={link} target="_blank">
                <h2 className="capitalize text-2xl font-bold my-2 hover:underline">{title}</h2>
            </Link>
            <p className="text-sm mb-2">{summary}</p>
            <span className="text-primary font-semibold">{time}</span>
        </li>
    )
}


const articles = () => {
    return(
        <>
        <Head>
            <title>Mike Lynagh | Articles</title>
            <meta name="description" content="" />
        </Head>
        <TransitionEffect />
        <main className="mx-auto max-w-screen-xl mb-16 flex flex-col items-center justify-center overflow-hidden">

            <Layout>
                <AnimatedText text="Read my content here " className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"/>
                <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-7-16">
                    
                    <FeaturedArticle
                    title="Build a Custom Page in React "
                    summary = "Learn how to build a custom pagination component in React. "
                    time="5 minute read"
                    link="/" 
                    img={article1}   
                     />
                    <FeaturedArticle
                    title="Create Loading Screen in React"
                    summary = "Learn how to build a custom pagination component in React. "
                    time="5 minute read"
                    link="/" 
                    img={article2}   
                     />
                </ul>
                <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
                    All Articles</h2>
                    <ul>
                        <Article 
                        title="Sample Article"
                        date="2024"
                        link="/"
                        
                        
                        />
                    </ul>
            </Layout>
        </main>
        </>
        
    )
}

export default articles