import projects from '../data/projects.js'
import container from '../data/container.js'

export default class {
    constructor(languageManager)
    {
        this.languageManager = languageManager;
        this.languageTag = languageManager.getLanguage()
    }

    printSeeProjectLink(project)
    {
        const self = this;
        if (project.hasOwnProperty('projectLink')) {
            return <a href={project.projectLink} className="btn btn-outline-success m-2" target="_blank">
                        {container.projectLink[self.languageTag]}
                    </a>
        }

        return ''
    }

    printSeeProjectRepository(project)
    {
        const self = this;
        if (project.hasOwnProperty('projectRepository')) {
            return <a href={project.projectRepository} className="btn btn-outline-success m-2" target="_blank">
                    {container.projectRepository[self.languageTag]}
                   </a>
        }

        return ''
    }

    printImage(project)
    {
        if (project.hasOwnProperty('image')) {
            return <img loading="lazy" src={project.image} width="100%" />
        }

        return '';
    }

    printUseTecnologies(useTecnologies)
    {
        return useTecnologies.map((item, index) => 
            useTecnologies.length === index + 1
                ? <b key={index}>{item}</b>
                : <b key={index}>{item}, </b>
        )
    }

    printProjects()
    {
        const self = this;

        return Object.keys(projects).map(index =>
            <div className="col-md-6 mb-4">
                <div className="card" key={index}>
                    {self.printImage(projects[index])}
                    <div className="card-body">
                        <h5 className="card-title">{projects[index].title[self.languageTag]}</h5>
                        <span>{self.printUseTecnologies(projects[index].useTecnologies)}</span>
                        <p className="card-text">{projects[index].description[self.languageTag]}</p>
                        {self.printSeeProjectLink(projects[index])}
                        {self.printSeeProjectRepository(projects[index])}
                    </div>
                </div>
            </div>
        )
    }
}