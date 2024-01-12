import React from 'react'
import {SkillsSection} from '../../components'

//TODO: Possibly add addtional content to the sidebar
//TODO: clean up the styling
//TODO: work on the mobile version
//TODO: clean up Skills

const SideBar = () => {
  return (
    <div className="rounded-2xl border-4 border-solid border-accent3 w-1/3 bg-sidebar flex flex-col position-absolute overflow-hidden m-3">
    <img 
      src="/placeholder.png"
      className="rounded-full max-h-[150px] max-w-[150px] box-shadow-xl p-4 mx-auto my-4"
    />
    <div className="text-5xl text-center text-accent2 pb-2" >Ricardo Ayala</div>
      <SkillsSection title="Tech Skills"/>
      <SkillsSection title="Soft Skills"/>
      </div>
  );
}

export default SideBar