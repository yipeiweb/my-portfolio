import PersonalProjectsView from '../views/personalProjects.view.js'
import PersonalProjectsData from '../data/personalProjects.data.js'
import PersonalProjectViewModel from '../layouts/personalProject.layout.js'

export default class PersonalProjectsController 
{
    renderView()
    {
        let voidContainer = document.createElement('div');
        voidContainer.innerHTML = PersonalProjectsView;

        PersonalProjectsData.forEach((project) => {
            voidContainer.querySelector('#personalProjectsContainer').innerHTML += PersonalProjectViewModel(project);
        });
        
        return voidContainer.innerHTML;
    }
}


