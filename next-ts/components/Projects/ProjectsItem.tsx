import React, { FC } from 'react';
import { NextRouter, useRouter } from 'next/router';
import { ProjectType } from '@/types/projects/ProjectType';
import { ParsedUrlQuery } from 'querystring';
import Link from 'next/link';

const ProjectsItem: FC<ProjectType> = ({ id, title }: ProjectType) => {
  const router: NextRouter = useRouter();
  const params: ParsedUrlQuery = router.query;
  const active: boolean = Number(params.id) === id;
  let activeClass: string = active ? 'bg-blue-500' : 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700';
  activeClass += ' flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white';

  return (
    <Link href={`/projects/${id}`}>
      <li className="projects-item w-fit">
        <div className={activeClass}>
          <span>{title}</span>
        </div>
      </li>
    </Link>
  );
};

export default ProjectsItem;
