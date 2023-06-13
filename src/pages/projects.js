import Head from 'next/head'
import Footer from '@/components/Footer'
import ContainerHero from '@/components/ContainerHero'
import Projects from '@/components/Projects'
import MobileMenu from '@/components/MobileMenu'
import Hero from '@/components/Hero'

export default function ProjectsPage() {
  return (
    <>
       <Head>
        <meta charSet="UTF-8" />
        <title>Projects</title>
        <meta name="description" content="Formal Education of Dwyan Alford" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Dwyan Alford"></meta>
        <meta name="robots" content="index,follow"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MobileMenu />
      <ContainerHero>
        <Hero currentPage="Projects" />
        <Projects />
      </ContainerHero>
      <Footer />
    </>
  )
}