import Link from "next/link";


const ProjectsListMain = ({projects}) => {
  const itemsProject = projects.map((item) => {
    return (
      <article key={item.id} className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
       <Link href={`/projects/${item.id}`}>
          <div className="relative flex items-end overflow-hidden rounded-xl">
            {/*<img*/}
            {/*  src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"*/}
            {/*  alt="Hotel Photo"/>*/}
          </div>

          <div className="mt-1 p-2">
            <h2 className="text-slate-700">{item.name}</h2>
            <p className="mt-1 text-sm text-slate-400">На подержке</p>

            <div className="mt-3 flex">

              <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100">
                <button className="text-sm">Перейти</button>
              </div>
            </div>
          </div>
       </Link>
      </article>
    )
  })
  return (
    <>
      <section className="py-10">
        <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {itemsProject}
        </div>
      </section>
    </>
  )
}

export default ProjectsListMain;
