import React from 'react';
import Head from 'next/head';
import StoryPortfolio from '../components/sections/StoryPortfolio';
import { getAllProjects, Project } from '../lib/projects';

type Props = {
  projects: Project[];
};

export default function StoryPortfolioPage({ projects }: Props) {
  return (
    <>
      <Head>
        <title>Films | Malvika Evelyn Portfolio</title>
        <meta name="description" content="Explore Malvika's films." />
        <meta property="og:title" content="Films | Malvika Evelyn Portfolio" />
      </Head>
      <StoryPortfolio projects={projects} />
    </>
  );
}

export async function getStaticProps() {
  const projects = getAllProjects();

  // Non-destructive reorder for display: ensure the order
  // is: No Saints Left (if present), Smash (Smash Guys), then Raincheck —
  // while preserving the relative order of any remaining projects.
  const reorderKeyMatch = (p: Project, keys: string[]) => {
    const s = (((p as any).slug || (p as any).title || '') + '').toString().toLowerCase();
    return keys.some((k) => s.includes(k));
  };

  const originals = [...projects];
  const firstItem = originals.find((p) => reorderKeyMatch(p, ['no saints', 'no-saints', 'no saints left']));
  const smashItem = originals.find((p) => reorderKeyMatch(p, ['smash']));
  const rainItem = originals.find((p) => reorderKeyMatch(p, ['raincheck', 'rain check']));

  const ordered: Project[] = [];
  if (firstItem) ordered.push(firstItem);
  if (smashItem && !ordered.includes(smashItem)) ordered.push(smashItem);
  if (rainItem && !ordered.includes(rainItem)) ordered.push(rainItem);

  // push remaining projects preserving original order
  originals.forEach((p) => {
    if (!ordered.includes(p)) ordered.push(p);
  });

  return { props: { projects: ordered } };
}
