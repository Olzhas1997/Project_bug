import React, { FC } from 'react';
import { IProjects } from '@/interfaces/projects/IProjects';
import Link from 'next/link';

const ProjectsListMain: FC<IProjects> = ({ projects }:IProjects) => {
  const parentClass: string = 'mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
  const itemParentClass: string = 'rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300';
  const itemCont: string = 'mt-1 p-2';
  const titleClass: string = 'text-slate-700';
  const statusClass: string = 'mt-1 text-sm text-slate-400';
  const btnClass: string = 'flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100';

  const itemsProject = projects.map((item) => (
    <Link href={`/projects/${item.id}`}>
      <article key={item.id} className={itemParentClass}>
        <div className={itemCont}>
          <h2 className={titleClass}>{item.title}</h2>
          <p className={statusClass}>На подержке</p>
          <div className="mt-3 flex">
            <div className={btnClass}>
              <button type="button" className="text-sm">Перейти</button>
            </div>
          </div>
        </div>
      </article>
    </Link>
  ));
  return (
    <section className="py-10">
      <div className={parentClass}>
        {itemsProject}
      </div>
    </section>
  );
};

export default ProjectsListMain;
