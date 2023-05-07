import React from "react";
import Head from "next/head";
import AnimateText from "@/components/AnimateText";
import Layout from "@/components/Layout";
import Skills from '@/components/Skills'
import TransitionEffect from '@/components/TransitionEffect'

const about = () => {
    return (
        <>
            <Head>
                <title>Jocsan Ramirez | About Page</title>
                <meta name="description" content="about" />
            </Head>

            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className='pt-16'>
                    <AnimateText text="Get to know me!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'></AnimateText>
                    <div className="text-center max-w-screen-md mx-auto">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">BIOGRAPHY</h2>
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center leading-relaxed">
                            Hi, my name is Jocsan and I am a system engineer, in progress, and passionate about innovation and technology. I living in Costa Rica.
                            I am currently studying information systems engineering at the National University of Costa Rica.
                        </p>

                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center leading-relaxed">
                            I have a wide range of hobbies and passions that keep me busy. From reading, learning new things, playing video games from time to time, I am always looking for new experiences and I love to stay engaged and learning new things.
                        </p>

                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center leading-relaxed">
                            I believe that you should{" "}
                            <span className="font-bold text-teal-500">
                                never stop growing
                            </span>{" "}
                            and that&#39;s what I strive to do, I have a passion for
                            technology and a desire to always push the limits of what is
                            possible. I am excited to see where my career takes me and am
                            always open to new opportunities. 😊
                        </p>
                    </div>

                    <Skills />
                </Layout>
            </main>
        </>
    )
}
export default about