import ProjectsItem from "@/components/Projects/ProjectsItem/ProjectsItem";

const ProjectsList = ({items, active}) => {
  const itemsProject = items.map((item) => <ProjectsItem key={item.id} item={item} active={(active === item.id)}/>);

  return (
    <div className="projects-list">
      <aside className="w-full" aria-label="Sidebar">
        <div className="px-3 py-4 bg-gray-50 dark:bg-gray-800">
          <ul className="flex gap-x-10">
            {itemsProject}
          </ul>
        </div>
      </aside>
    </div>
  )
}

export default ProjectsList;

