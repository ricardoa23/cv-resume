import { projectsModel } from '@/models'

const projectsData: projectsModel[] = [
    {
        title: 'CV website (this website)',
        description: 'A website to showcase my projects and skills, my work History and my contact information.',
        image: 'P_placeholder.png',
        link: 'RicardoAyalaJr.com',
        github: 'https://github.com/ricardoa23/cv-resume',
        technologies: ['Typescript', 'Next.Js', 'React', 'CSS', 'TailwindCSS']
    },{
        title: 'Entrylevelcoder.com',
        description: 'A Website for new developers to find entry level positions in the tech industry.',
        image: 'EntryLevelCoder.png',
        link: 'https://entrylevelcoder.com',
        github: 'https://github.com/entry-level-coder/EntryLevelCoder',
        technologies: ['Javascript', 'Java', 'Springboot', 'Spring', 'CSS']
    },
    {
        title: 'Resume Builder',
        description: 'A single page application that allows users to create a resueme and download a docx file.',
        image: 'P_placeholder.png',
        link: '',
        github: 'https://github.com/ricardoa23/resume-builder',
        technologies: ['Typescript', 'React', 'Docx.js', 'CSS', 'TailwindCSS']
    }
]

export default projectsData;