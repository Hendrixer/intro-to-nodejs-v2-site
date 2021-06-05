import React from 'react'
import Head from 'next/head'
import Container from '../components/container'
import Navbar from '../components/navbar'

const Page = ({ children, hasContainer }) => (
  <div className="dark:bg-gray-800 min-h-screen">
    <Head>
      <link rel="preload" href="/fonts/Lato/Lato-Regular.ttf" as="font" crossOrigin="" />
      <link rel="preload" href="/fonts/Lato/Lato-Bold.ttf" as="font" crossOrigin="" />
      <link rel="preload" href="/fonts/Lato/Lato-Light.ttf" as="font" crossOrigin="" />
    </Head>
    <Navbar />

    {hasContainer ? <Container className="py-4">{children}</Container> : <div>{children}</div>}
  </div>
)

Page.defaultProps = {
  hasContainer: true,
}

export default Page
