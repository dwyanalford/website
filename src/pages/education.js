import Head from 'next/head'
import Hero from '@/components/Hero'
import Education from '@/components/Education'
import Header from '@/components/Header'

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
        <Header />
        <Education />
    </>
  )
}