import React, { FC } from 'react';
import { IBugsList } from '@/interfaces/IBugsList';
import BugsList from '@/components/Bugs/BugsList';

const BugsSection: FC<IBugsList> = ({ bugs }: IBugsList) => {
  const parentClass: string = 'flex flex-col p-6"';
  return (
    <div className={parentClass}>
      <BugsList bugs={bugs} />
    </div>
  );
};

export default BugsSection;
