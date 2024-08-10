import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import { LinkArrow } from '@/components/icons';
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import profilePic from "../../public/images/profile/Selfie.jpeg";
import AnimatedText from '@/components/AnimatedText';
import TransitionEffect from '@/components/hooks/TransitionEffect';
import ContactForm from '@/components/ContactForm';


export default function Home() {
  return (
    <>
      <Head>
        <title>Mike Lynagh Software Engineer Portfolio</title>
        <meta name="description" content="Mike Lynagh Software Engineer Portfolio" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light max-w-7xl">
        <Layout className='pt-0 md:pt-16 md:py-8 sm:py-8'>
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className='w-1/2 md:w-full sm:py-8'>
            <div className="relative w-full max-w-[400px] sm:max-w-[250px] md:max-w-[300px] mx-auto"> {/* Adjusted max-width for different screen sizes */}

                <div className="relative rounded-2xl border-2 border-solid border-dark bg-light p-3
                      dark:bg-dark dark:border-light">
                  <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark
                        dark:bg-light" />
                  <Image 
                    src={profilePic} 
                    alt="Mike Lynagh - Software Developer" 
                    width={280}
                    height={280}
                    className="w-full h-auto rounded-xl object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 280px"
                  />
                </div>
              </div>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center md:text-left'>
              <AnimatedText 
                text="Are you Looking For A Freelance Software Developer?" 
                className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-4xl' 
              />
              <p className='mb-4 text-lg font-medium'>
              Do you need:
            </p> 
            <ul className="list-inside space-y-4 mb-8">
              <li>A reliable, full stack, Software Developer who will deliver your project on time and on budget.</li>
              <li>Guaranteed, professional development from someone who wants to see your business grow and succeed. </li>
              <li>You're in the right place! Here's what you can do next: </li>
              <li>Option A: Hire me today, just fill in the contact form below.</li>
              <li>Option B: Keep reading below to figure out why I am the right person for you.</li>
            </ul>
    
              <div className='flex items-center self-start mt-2 lg:self-center'>
              <Link href="mailto:mikelynagh@yahoo.com?subject=Inquiry for Web Dev"

                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light'
                >
                Contact <LinkArrow className="w-6 ml-1" />
              </Link>
              </div>
            </div>
          </div>
          

          
          <ContactForm />
          
          <div className="mt-16">
            <AnimatedText 
              text="What Can An Expert Web Developer Do For You?" 
              className='!text-3xl md:!text-4xl !text-left mb-8'
            />
            <p className='mb-4 text-lg font-medium'>
              Common scenarios where I can deliver successful projects:
            </p> 
            <ol className="list-decimal list-inside space-y-4 mb-8">
              <li>Your business needs a new website so that you can get more clients and sell more stuff.</li>
              <li>You need to update your current website and don't want to waste time messing with technical issues.</li>
              <li>You require a new plugin or custom 3rd party integration to be developed on your website to make your job or your staff's job easier.</li>
              <li>You need a Web Developer to work alongside a designer to plan the best approach for your project.</li>
              <li>You want to grow the online aspect of your business but you're not sure where to start.</li>
              <li>You have a paper task that takes up hours every week and you want to automate it so that you can get your life back.</li>
            </ol>
            <p className='mb-8 text-lg font-medium'>
              If one of those situations describes your current needs, you're in the right place. Most business owners don't want to be sat in front of a laptop late at night or on weekends messing with technical problems. I get that. Let me help you to solve that problem. You can hire me to help today.
            </p> 
            <div className='flex items-center self-start mt-2 lg:self-center'>
            <Link href="mailto:mikelynagh@yahoo.com?subject=Inquiry for Web Dev"

                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light'
                >
                  Contact <LinkArrow className="w-6 ml-1" />
                </Link>
              </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

