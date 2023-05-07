import React from "react";
import Head from 'next/head'
import Layout from "@/components/Layout";
import AnimateText from "@/components/AnimateText";
import TransitionEffect from '@/components/TransitionEffect'

const contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    //some function
  }

  return (
    <>
      <Head>
        <title>Jocsan Ramirez | Contact Page</title>
        <meta name="description" content="about" />
      </Head>

      <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center">
        <Layout className='pt-16'>
          <AnimateText text="Get to know me!" className='mb-16'></AnimateText>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto dark:text-light">
            <div className="mb-4">
              <label htmlFor="name" className="block dark:text-light-500 font-bold mb-2">Name:</label>
              <input type="text" id="name" name="name" required className="appearance-none border rounded w-full py-2 px-3 text-light-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block dark:text-light-700 font-bold mb-2">Email:</label>
              <input type="email" id="email" name="email" required className="appearance-none border rounded w-full py-2 px-3 text-light-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block dark:text-light-700 font-bold mb-2">Message:</label>
              <textarea id="message" name="message" rows="5" required className="appearance-none border rounded w-full py-2 px-3 text-light-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
            </div>

            <div className="flex justify-center">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
            </div>
          </form>
        </Layout>
      </main>
    </>
  )
}

export default contact;
