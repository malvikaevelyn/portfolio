import React from 'react';
import Head from 'next/head';
import DemoReel from '../components/sections/DemoReel';

export default function DemoReelPage() {
  return (
    <>
      <Head>
        <title>Demo Reel</title>
        <meta name="description" content="Watch Malvika's demo reel." />
      </Head>
      <DemoReel />
    </>
  );
}
