import React, { FC } from 'react';
import { IProjects } from '@/interfaces/projects/IProjects';
import ProjectsItem from '@/components/Projects/ProjectsItem';

const ProjectsList: FC<IProjects> = ({ projects }: IProjects) => {
  const itemsProject = projects.map((item) => <ProjectsItem id={item.id} title={item.title} />);
  const itemClass: string = 'projects-list px-3 py-4 bg-gray-50 dark:bg-gray-800';
  return (
    <aside className="w-full" aria-label="Sidebar">
      <div className={itemClass}>
        <ul className="flex gap-x-10">
          {itemsProject}
        </ul>
      </div>
    </aside>
  );
};

export default ProjectsList;
