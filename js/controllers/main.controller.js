import CONST from '../constants.js';
import HomeView from "../views/home.view.js";
import PersonalProjectsController from '../controllers/personalProjects.controller.js'
import WorkProjectsController from '../controllers/workProjects.controller.js'

export default class MainController 
{
    constructor()
    {
        this.urls = CONST.urls;
        this.containerSelector = CONST.containerSelector;
        this.personalProjectsController = new PersonalProjectsController();
        this.workProjectsController = new WorkProjectsController();
        this.views = [this.personalProjectsController.renderView(), this.workProjectsController.renderView()];
        this.checkedUrl = false;

        this.checkRoute(this);
        this.addClickEventToUrls(this);
    }

    checkRoute(self)
    {
        self.urls.forEach((url, index) => {
            if (location.href.includes(url)) {
                self.containerSelector.innerHTML = self.views[index];
                self.checkedUrl =  true;
            }
        });
        
        if (!self.checkedUrl) {
            self.containerSelector.innerHTML = HomeView;
        }
    }

    addClickEventToUrls(self)
    {
        self.urls.forEach((url, index) => {
            document.querySelectorAll(`[href="${url}"]`).forEach((element) => {
                element.addEventListener('click', () => {
                    self.containerSelector.innerHTML = self.views[index];
                });
            }); 
        })
    }
}


