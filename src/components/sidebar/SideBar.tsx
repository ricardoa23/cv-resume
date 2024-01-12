import React from 'react'
import {SkillsSection} from '../../components'

//TODO: Possibly add addtional content to the sidebar
//TODO: clean up the styling
//TODO: work on the mobile version
//TODO: clean up Skills

const SideBar = () => {
  return (
    <div className=" rounded-lg border-2 border-solid max-w-[33%] min-h-screen bg-sidebar flex flex-col position-absolute overflow-hidden ms-1">
    <img 
      src="/placeholder.png"
      className="rounded-full max-h-[200px] max-w-[200px] box-shadow-xl p-4 mx-auto my-4"
    />
    <div className="text-5xl text-center text-white pb-2" >Ricardo Ayala</div>
      <SkillsSection title="Tech Skills"/>
      <SkillsSection title="Soft Skills"/>
  </div>
  );
}

export default SideBar