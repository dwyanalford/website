import Head from 'next/head'
import Footer from '@/components/Footer'
import ContainerHero from '@/components/ContainerHero'
import Education from '@/components/Education'
import Hero from '@/components/Hero'
import MobileMenu from '@/components/MobileMenu'

export default function EducationPage() {
  return (
    <>
       <Head>
        <meta charSet="UTF-8" />
        <title>Dwyan Education</title>
        <meta name="description" content="Formal Education of Dwyan Alford" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Dwyan Alford"></meta>
        <meta name="robots" content="index,follow"/>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <MobileMenu />
      <ContainerHero>
        <Hero currentPage="Education"/>
        <Education />
      </ContainerHero>
      <Footer />
    </>
  )
}