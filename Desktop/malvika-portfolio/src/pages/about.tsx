import React from 'react';
import Head from 'next/head';
import About from '../components/sections/About'; // Ensure the path is correct and matches the file structure

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Learn more about Malvika." />
      </Head>
      <About />

      {/* Small bottom-right credit with email link */}
      <div className="fixed bottom-4 right-4 text-sm text-gray-400 text-right z-50">
        <div>Website made by Aziz Pothiwala</div>
        <a href="mailto:azizisnotavailable@gmail.com" className="underline hover:text-gray-200">azizisnotavailable@gmail.com</a>
      </div>
    </>
  );
}
