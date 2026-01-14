import React from 'react';
import Head from 'next/head';
import PersonalWork from '../components/sections/PersonalWork';
import { getPersonalWorkImages } from '../lib/media';

type Props = { images: string[] };

export default function PersonalWorkPage({ images }: Props) {
  return (
    <>
      <Head>
        <title>Personal Work</title>
        <meta name="description" content="Explore Malvika's personal work and studies." />
      </Head>
      <PersonalWork images={images} />
    </>
  );
}

export async function getStaticProps() {
  const images = getPersonalWorkImages();
  return { props: { images } };
}
