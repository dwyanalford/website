import Head from 'next/head'
import Footer from '@/components/Footer'
import SideMenu from '@/components/SideMenu'
import ContainerHero from '@/components/ContainerHero'
import Home from '@/components/Home'

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
      <SideMenu />
      <ContainerHero>
        <Home />
      </ContainerHero>
      <Footer />
    </>
  )
}