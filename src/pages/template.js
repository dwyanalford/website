import Head from 'next/head'
import FullTemplate from '@/components/Template'

export default function TestingPage() {
  return (
    <>
       <Head>
        <meta charSet="UTF-8" />
        <title>Template Page</title>
        <meta name="description" content="The bare minimum template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Dwyan Alford"></meta>
        <meta name="robots" content="index,follow"/>
      </Head>
      <FullTemplate />
    </>
  )
}