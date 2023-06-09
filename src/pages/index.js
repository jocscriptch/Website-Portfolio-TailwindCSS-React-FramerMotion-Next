import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Photo from '../../public/images/profile/photo.jpeg'
import AnimateText from '@/components/AnimateText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jocsan Ramirez | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

    <TransitionEffect/>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>

        <Layout className='pt-0 md:pt-16 sm:pt-8'>

          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className='w-1/2 md:w-full'>
            <Image src={Photo} alt="Jocsan" width={400} height={400} className="rounded-full lg:hidden md:inline-block md:w-full" 
            priority
            sizes="(max-width: 768px) 100vm,
            (max-width: 1200px) 50vm,
            50vm"
            />


           </div>

            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>

              <AnimateText text="Hi, I&#39;m Jocsan!" className='!text-6xl !text-left
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />

              <p className="text-lg mt-4 mb-6 md:text-2xl sm:!text-3xl">
                I&#39;m a{" "}
                <span className="font-semibold text-teal-600">
                  Systems Engineer{" "}
                </span>
                in progress, I am currently studying at the National University of Costa Rica.
              </p>

              <div className='flex items-center self-start mt-2 lg:self-center'>

                <Link href="/cv.pdf" target={"_blank"}
                className="flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light md:p-2 md:px-4 md:text-base"

                download={true}
                >Resume <LinkArrow className={"w-6 ml-1"}/>
                </Link>
                <Link href="/contact"
                className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light
                md:text-base"
                >Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
