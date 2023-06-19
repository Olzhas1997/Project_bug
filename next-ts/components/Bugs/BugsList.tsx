import React, { FC } from 'react';
import { IBugsList } from '@/interfaces/IBugsList';

const BugsList: FC<IBugsList> = ({ bugs }: IBugsList) => {
  const parentClass: string = 'mt-6 relative z-0';
  const borderClass: string = 'border border-gray-200 dark:border-gray-700 md:rounded-lg';
  const tableContClass: string = 'grid grid-rows-12 divide-y divide-gray-200 dark:divide-gray-700';
  const tableClass: string = 'grid grid-cols-12 gap-10';
  const cellClass: string = 'flex flex-col justify-center p-4 text-xs font-small';
  const btnClass: string = 'pointer-events-auto flex items-center justify-center px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600';
  const bugsLines = bugs.map((item) => {
    const { id } = item;
    return (
      <div key={item.id} className={tableClass}>
        <div className={cellClass}>{item.title}</div>
        <div className={cellClass}>{item.description}</div>
        <div className={cellClass}>{item.status}</div>
        <div className={cellClass}>{item.urgency}</div>
        <div className={cellClass}>
          <button type="button" id={id.toString()} className={btnClass}>
            <span id={id.toString()}>Изменить</span>
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className={parentClass}>
      <div className={borderClass}>
        <div className={tableContClass}>
          {bugsLines}
        </div>
      </div>
    </div>
  );
};

export default BugsList;
