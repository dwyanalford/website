import Head from 'next/head'
import Bio from '@/components/Template'

export default function TestingPage() {
  return (
    <>
       <Head>
        <meta charSet="UTF-8" />
        <title>Dwyan's Bio</title>
        <meta name="description" content="Biography of Dwyan Alford" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Dwyan Alford"></meta>
        <meta name="robots" content="index,follow"/>
      </Head>
      {/* <Layout> */}
        {/* <Header />
        <PageHeader title="Biography" /> */}
        <Bio/>
        {/* <Footer/> */}
      {/* </Layout> */}
    </>
  )
}