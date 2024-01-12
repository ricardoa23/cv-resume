import React from 'react'
import { techSkills, softSkills } from '../../data/skillsData'

//TODO; figure out additiuonal styling
//TODO: adjust color and text size based
//TODO: work on the mobile version

type SkillsTitle = {
  title: string;
}

const SkillsSection: React.FC<SkillsTitle> = ({title}) => {

  const mappingSkills = (skills: string[]) => {

    return skills.map((skill, index) => {
      return <li key={index} className="mx-3 text-sm">{skill}</li>;
    });

  };
  
  return (
      <section className="max-w-inherit py-3">
      <h2 className="text-4xl text-white text-center">{title}</h2>
      <ul className="list-disc list-outside flex flex-wrap justify-around px-5 py-3">
        {mappingSkills((title === "Tech Skills") ? techSkills : softSkills)}
      </ul>
      </section>
  );
}

export default SkillsSection