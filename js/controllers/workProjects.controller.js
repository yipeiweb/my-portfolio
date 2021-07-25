import WorkProjectsView from '../views/workProjects.view.js'
import WorkProjectsData from '../data/workProjects.data.js'
import WorkProjectViewModel from '../layouts/workProject.layout.js'

export default class WorkProjectsController 
{
    renderView()
    {
        let voidContainer = document.createElement('div');
        voidContainer.innerHTML = WorkProjectsView;

        WorkProjectsData.forEach((project) => {
            voidContainer.querySelector('#workProjectsContainer').innerHTML += WorkProjectViewModel(project);
        });
        
        return voidContainer.innerHTML;
    }
}


