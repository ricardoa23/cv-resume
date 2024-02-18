import React from 'react'
import { Projects, WorkHistory } from '..'



const CvSection = () => {
  return (
    <section className=" flex flex-col  w-2/3 border-borderBlue bg-sectionBGBlue rounded-2xl border-4 border-solid position-static  overflow-y-auto m-3">
        <h2 className="text-center text-3xl pt-6 text-bgLightBlue">Where I&apos;ve Worked</h2>
        <WorkHistory />
        <h2 className="text-center text-3xl pt-6 text-bgLightBlue">My Projects</h2>
        <Projects />
    </section>
  )
}

export default CvSection