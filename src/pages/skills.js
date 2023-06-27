import Head from 'next/head'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Skills from '@/components/Skills'

export default function SkillsPage() {
  return (
    <>
       <Head>
        <meta charSet="UTF-8" />
        <title>Skills</title>
        <meta name="description" content="Formal Education of Dwyan Alford" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Dwyan Alford"></meta>
        <meta name="robots" content="index,follow"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
        <Hero pageName="Skills" />
        <Skills/>
      <Footer />
    </>
  )
}