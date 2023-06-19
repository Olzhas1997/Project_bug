import { BugType } from '@/types/bugs/BugType';

export type ProjectType = {
  id: number,
  title: string,
  bugs: BugType[]
};
