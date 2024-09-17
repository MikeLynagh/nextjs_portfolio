import React from "react"
import Head from "next/head"
import Image from "next/image"
import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import profilePic from "../../public/images/profile/Selfie.jpeg"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import TransitionEffect from "@/components/hooks/TransitionEffect"
import ContactForm from "@/components/ContactForm"

const about = () => {
    return(
        <>
         {/* fill this in for SEO */}
        <Head>
            <title>Mike Lynagh | About Page</title>
            <meta name="description" content="any description" />
        </Head>
        <TransitionEffect />
        <main className="flex w-full flex-col items-center justify-center dark:text-light">
            <Layout className="pt-16 ml-20">
            <AnimatedText text="About Mike Lynagh" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-5xl sm:mb-8" />
            <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                    <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">About me</h2>
                    <p className="font-medium ">
                    Web Developer, Software Engineer. <br/><br />

                    Hi, I'm Mike! <br/>
                    I became interested in programming a few years back and decided to go back to university as a mature student to learn more about programming and software engineering. So here we are. <br></br><br></br>

                    Enough about me. You're here to figure out If I can help your business. Right? <br></br><br></br>

                    If you're looking for a pretty fast website for your business, I have gained a lot of experience with Next.js which is a really good tool to build super fast websites. 
                    I am based in Galway, Ireland but the good news for you is that I am based remotely, as long as I have power and wifi, I am good to go. 

                    <br></br><br></br>Currently, I am available for hire. If you need a reliable software developer, just get in touch. 
                    </p>
                    
                    <p className="font-medium">
                        This website is my little home on the internet. Feel free to browse around. Most of my writing I share are summaries of my own learning. You might find it helpful. You can follow me on twitter @MikeLynagh. 
                    </p>
                </div>
                <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8
                dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
                    <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark
                    dark:bg-light" />
                    
                    <Image src={profilePic} alt="Mike Lynagh" className="w-full h-auto rounded-2xl" 
                    priority
                    sizes='(max-width: 768px) 100vw, (max-width:1200px) 50vw, 
                    33vw'
                    />
                </div>
                {/* <div className="col-span-2 flex flex-col items-center justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                    <div className="flex flex-col justify-center xl:items-center">
                        <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl">
                            50+
                        </span>
                        <h2 className="text-xl font-medium capitalize text-dark/75 xl:items-center">satisfied clients</h2>
                    </div>

                    <div className="flex flex-col items-center justify-center">

                    <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl">
                            40+
                        </span>
                        <h2 className="text-xl font-medium capitalize text-dark/75 xl:items-center">projects completed</h2>
                    </div>

                    <div className="flex flex-col items-center justify-center">

                    <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl">

                            4+
                        </span>
                        <h2 className="text-xl font-medium capitalize text-dark/75  xl:items-center">years of experience</h2>
                    </div>
                </div> */}


            </div>
            <Skills />
            {/* <Experience /> */}
            <Education />
            <ContactForm />
            </Layout>
        </main>
        </>

    )
}

export default about