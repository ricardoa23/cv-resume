import { Tprojects } from '../types'

class projectsModel implements Tprojects {
    title: string;
    description: string;
    image: string;
    link: string;
    github: string;
    technologies: string[];

    constructor(title: string, decription: string, image: string, link: string, github: string, technologies: string[]) {
        this.title = title;
        this.description = decription;
        this.image = image;
        this.link = link;
        this.github = github;
        this.technologies = technologies;
    }
}

export default projectsModel;

