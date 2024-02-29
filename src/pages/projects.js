import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/icons";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import {motion} from "framer-motion"

const FramerImage = motion(Image)


const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return(
        <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl
        lg: flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        ">
            <Link href={link} target="_blank"
            className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
                <FramerImage src={img} alt={title} className="w-full h-auto" 
                 whileHover={{scale:1.05}}
                 transition={{duration:0.2}}
                 priority
                 sizes='(max-width: 768px) 100vw, (max-width:1200px) 50vw, 
            50vw'
                />
            </Link>
            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary font-medium text-xl">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark">{summary}</p>
                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank" className="w-10">
                        <GithubIcon />
                    </Link>
                    <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold">Visit Project</Link>
                </div>
            </div>
        </article>
    )
}



const Project = ({title, type, img, link, github}) => {
    return(
        <article className="w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:text-dark xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
           <Link href={link} target="_blank"
            className="w-full cursor-pointer overflow-hidden rounded-lg">
                <FramerImage src={img} alt={title} className="w-full h-auto" 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                
                />
            </Link>
            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary font-medium text-xl">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-lg">{title}</h2>
                </Link>
                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank" className="w-10">
                        <GithubIcon />  
                    </Link>
                    <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold">Visit 
                    </Link>
                </div>
            </div> 
        </article>
    )
}

const projects = () => {
    return(
        <>
        <Head>
            <title>
                Mike Lynagh | Projects Page
            </title>
            <meta name="description" content="any description"/>
        </Head>

        <main className="mx-auto max-w-screen-xl mb-16 flex flex-col items-center justify-center dark:text-light">
            <Layout className="pt-16">
                <AnimatedText 
                text="Projects build Skills" 
                className="mb-16 justify-center lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-5xl"/>
                <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                    <div className="col-span-12">
                        <FeaturedProject 
                        
                        title="Crypto Screener Application"
                        img={project1}
                        summary="a project using React. Its shows details about cryptocurrency. You can easily conver the price in your local currency."
                        link="/"
                        github="/"
                        type="featured Project"
                        />
                    </div>
                    <div className="col-span-6 sm:col-span-12">
                    <Project 
                        
                        title="Crypto Screener Application"
                        img={project1}
                        summary="a project using React. Its shows details about cryptocurrency. You can easily conver the price in your local currency."
                        link="/"
                        github="/"
                        type="featured Project"
                        />
                    </div>
                    <div className="col-span-6 sm:col-span-12">
                    <Project 
                        
                        title="Crypto Screener Application"
                        img={project1}
                        summary="a project using React. Its shows details about cryptocurrency. You can easily conver the price in your local currency."
                        link="/"
                        github="/"
                        type="featured Project"
                        />
                    </div>

                    
                    <div className="col-span-6 sm:col-span-12">
                    <Project 
                        
                        title="Crypto Screener Application"
                        img={project1}
                        summary="a project using React. Its shows details about cryptocurrency. You can easily conver the price in your local currency."
                        link="/"
                        github="/"
                        type="featured Project"
                        />
                    </div>
                    <div className="col-span-6 sm:col-span-12">
                    <Project 
                        
                        title="Crypto Screener Application"
                        img={project1}
                        summary="a project using React. Its shows details about cryptocurrency. You can easily conver the price in your local currency."
                        link="/"
                        github="/"
                        type="featured Project"
                        />
                    </div>

                </div>

            </Layout>
        </main>
        </>
    )
}

export default projects