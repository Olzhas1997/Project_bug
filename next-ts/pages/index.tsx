import * as React from 'react';
import { NextPage } from 'next';
import { ProjectType } from '@/types/projects/ProjectType';
import ProjectsListMain from '@/components/Projects/ProjectsListMain';

const HomePage:NextPage = () => {
  const projects: ProjectType[] = [
    {
      id: 0,
      title: 'Апрель',
    },
    {
      id: 1,
      title: 'ГПН',
    },
    {
      id: 2,
      title: 'ЖБИ-3',
    },
  ];
  return <ProjectsListMain projects={projects} />;
};
export default HomePage;
