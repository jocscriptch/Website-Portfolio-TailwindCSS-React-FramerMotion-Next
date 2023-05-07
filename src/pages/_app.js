import '@/styles/globals.css'
import { Josefin_Sans } from 'next/font/google'
import Head from 'next/head';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  variable: "-font-josefin_sans",
  weight: "700",
})

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ico.png" />
      </Head>

      <main className={`${josefin_sans.variable} font-josefin_sans bg-light dark:bg-dark w-full min-h-screen`}>
        <NavBar />
          <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}