import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

export default function HomePage() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Home</title>
        <meta name="description" content="Home page at www.dwyanalford.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Dwyan Alford"></meta>
        <meta name="robots" content="index,follow"/>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header/>
      <Hero pageName="Home" />
    </>
  )
}
