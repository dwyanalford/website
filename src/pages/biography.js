import Head from 'next/head'
import MobileMenu from '@/components/MobileMenu'
import Content from '@/components/Content'
import Hero from '@/components/Hero'
import Biography from '@/components/Biography'
import Footer from '@/components/Footer'

export default function BiographyPage() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Dwyan Biography</title>
        <meta name="description" content="Biography of Dwyan Alford portfolio web application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Dwyan Alford"></meta>
        <meta name="robots" content="index,follow"/>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <MobileMenu/>
      <Content>
        <Hero pageName="Biography" />
        <Biography />
      </Content>
      <Footer />
    </>
  )
}
