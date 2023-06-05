import Head from 'next/head'
import Footer from '@/components/Footer'
import SideMenu from '@/components/SideMenu'
import ContainerHero from '@/components/ContainerHero'
import Profile from '@/components/Profile'

export default function ProfilePage() {
  return (
    <>
       <Head>
        <meta charSet="UTF-8" />
        <title>Profile</title>
        <meta name="description" content="Formal Education of Dwyan Alford" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Dwyan Alford"></meta>
        <meta name="robots" content="index,follow"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideMenu />
      <ContainerHero>
        <Profile />
      </ContainerHero>
      <Footer />
    </>
  )
}