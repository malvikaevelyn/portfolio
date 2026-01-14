import React from 'react';
import CommercialWork from '../components/sections/CommercialWork';
import { getAllCommercialProjects, Project } from '../lib/commercialProjects';
import { GetStaticProps } from 'next';

interface CommercialWorkPageProps {
  projects: Project[];
}

const CommercialWorkPage: React.FC<CommercialWorkPageProps> = ({ projects }) => {
  return <CommercialWork projects={projects} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllCommercialProjects();
  return {
    props: {
      projects,
    },
  };
};

export default CommercialWorkPage;
