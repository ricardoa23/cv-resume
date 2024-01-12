import React from 'react'
import { projectsData as data } from '@/data/projectsData'


const Projects = () => {
    const dataMapping = data.map((project, index) => {
        return (
            <div key={index} className="border-4 border-solid border-accent4 border-xl bg-cvbg m-8 rounded-xl px-3">
                <h3 className="text-4xl text-center pt-5 text-accent3">{project.title}</h3>
                <div className="h-6xl w-xl px-3">
                <img src='/P_Placeholder.png' alt="Screenshot of project" className="rounded-xl border-2 border-solid border-accent3 box-shadow-xl"/>
                </div>
                <div>
                    <p className="py-2">{project.description}</p>
                    <p className="py-2">{project.link}</p>
                    <p className="py-2">{project.github}</p>
                </div>
                <ul className="flex justify-around py-5">
                    {project.technologies.map((tech, index) => {
                        return (
                            <li key={index}>{tech}</li>
                        )
                    })}
                </ul>
            </div>
        )
    });

  return (
    <section>{dataMapping}</section>
  )
}

export default Projects