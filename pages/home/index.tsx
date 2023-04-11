import ImageEffectView from '@/components/home/ImageEffectView'
import React from 'react'
import Head from "next/head";

const Home = () => {
  return (
    <>
    <Head>
      <title>Create Next App1</title>
    </Head>
    <div>
      <ImageEffectView />
    </div>
    </>
  )
}

export default Home