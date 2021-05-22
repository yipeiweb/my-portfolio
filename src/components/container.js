import React from 'react';
import LanguageManager from '../services/languageManager.js'
import ContainerController from '../controllers/ContainerController.js'

const Container = () => {
    const languageManager = new LanguageManager();

    const containerController = new ContainerController(languageManager);
    const printProjects = containerController.printProjects();

    return (
        <div className="container mt-4">
        <div className="row">
                { printProjects}
        </div>
        </div>
    );
}
 
export default Container;