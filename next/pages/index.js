import ProjectsListMain from "@/components/Projects/ProjectsListMain/ProjectsListMain";
import {checkEnvironment} from "@/components/checkEnvironment";


export async  function getServerSideProps()  {
  const response = await fetch(checkEnvironment().concat('/api/projects'));
  const projects = await response.json();

  return {
    props: {
      projects
    }
  }
}


export default function Home({projects}) {

  return (
      <>
        <ProjectsListMain projects={projects}/>
      </>
  )
}
