import Head from 'next/head'
import Header from '@/components/Header'
import MobileMenu from '@/components/MobileMenu'
import Content from '@/components/Content'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Dwyan Home</title>
        <meta name="description" content="home page of Dwyan Alford portfolio web application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Dwyan Alford"></meta>
        <meta name="robots" content="index,follow"/>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header/>
      <MobileMenu/>
      <Content>
        <Hero pageName="Home" />
      </Content>
      <Footer />
    </>
  )
}
