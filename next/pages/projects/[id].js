import BugsSection from "@/components/Bugs/BugsSection/BugsSection";
import ProjectsList from "@/components/Projects/ProjectsList/ProjectsList";
import {checkEnvironment} from "@/components/checkEnvironment";


export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const responseProjects = await fetch(checkEnvironment().concat('/api/projects'));
  const projects = await responseProjects.json();

  const responceBugs = await  fetch(checkEnvironment().concat(`/api/bugs/${id}`))
  const bugs = await responceBugs.json();

  return {
    props: {
      projects,
      bugs,
      id
    }
  }
};

const Project = ({projects, bugs, id}) => {
  return (
    <>
      <div className={'flex flex-col'}>
        <div>
          <ProjectsList items={projects} active={id} />
        </div>
        <div>
          <BugsSection  items={bugs} projectId={id} />
        </div>
      </div>
    </>
  )
}

export default Project;
