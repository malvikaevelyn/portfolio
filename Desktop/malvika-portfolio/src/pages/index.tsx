import React from 'react';
import Head from 'next/head';
import Landing from '../components/sections/Landing';

export default function Home() {
  return (
    <>
      <Head>
        <title>Malvika Portfolio</title>
        <meta name="description" content="Portfolio of an animation and art student." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </>
  );
}
