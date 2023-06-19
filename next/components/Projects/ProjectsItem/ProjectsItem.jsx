import {useActions} from "@/app/hooks/useActions";

const ProjectsItem = ({item, active}) => {
  let activeClass = (active) ? 'bg-blue-500' : 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700';
  activeClass += ' flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white';

  const {changeActive} = useActions();

  return(
    <li className={'projects-item w-fit'} onClick={() => changeActive(item.id)}>
      <div
         className={activeClass}>
        <span className="">{item.name}</span>
      </div>
    </li>
  )
}

export default ProjectsItem;
