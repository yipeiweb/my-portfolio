import projects from '../data/projects.js'
import container from '../data/container.js'

export default class {
    constructor(languageManager)
    {
        this.languageManager = languageManager;
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
        const languageTag = this.languageManager.getLanguage();
        const self = this;

        return Object.keys(projects).map(index =>
            <div className="col-md-6">
                <div className="card" key={index}>
                    <img loading="lazy" src={projects[index].image} width="100%" />
                    <div className="card-body">
                        <h5 className="card-title">{projects[index].title[languageTag]}</h5>
                        <span>{self.printUseTecnologies(projects[index].useTecnologies)}</span>
                        <p className="card-text">{projects[index].description[languageTag]}</p>
                        <a href={projects[index].projectLink} className="btn btn-outline-success m-2" target="_blank">
                            {container.projectLink[languageTag]}
                        </a>
                        <a href={projects[index].projectRepository} className="btn btn-outline-success m-2" target="_blank">
                            {container.projectRepository[languageTag]}
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}