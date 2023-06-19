import React, { FC } from 'react';
import { IProjectDetail } from '@/interfaces/projects/IProjectDetail';
import { BugType } from '@/types/bugs/BugType';
import ProjectsList from '@/components/Projects/ProjectsList';
import { ProjectType } from '@/types/projects/ProjectType';
import BugsSection from '@/components/Bugs/BugsSection';

const Project:FC<IProjectDetail> = ({ id, bugs }: IProjectDetail) => {
  const currentId: number = 1;
  const currentBugs: BugType[] = [
    {
      id: 0,
      title: 'Баг',
      description: 'Не открывается модалка',
      status: 'Новый',
      urgency: 'срочный',
    },
    {
      id: 1,
      title: 'Баг',
      description: 'Не закрывается модалка',
      status: 'Новый',
      urgency: 'срочный',
    },
  ];

  const projects: ProjectType[] = [
    {
      id: 0,
      title: 'Апрель',
      bugs: [],
    },
    {
      id: 1,
      title: 'ГПН',
      bugs: [],
    },
    {
      id: 2,
      title: 'ЖБИ-3',
      bugs: [],
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <ProjectsList projects={projects} />
      <BugsSection bugs={currentBugs} />
    </div>
  );
};

export default Project;
