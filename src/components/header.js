import React from 'react';
import data from '../data/header.js'
import HeaderController from '../controllers/HeaderController.js'
import LanguageManager from '../services/languageManager.js'

const Header = () => {
    const languageManager = new LanguageManager();
    const headerController = new HeaderController(languageManager);

    const printLanguages = headerController.printLanguages();
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success p-2">
                <a className="navbar-brand" href="#">{data.title}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {data.selectLanguagesText[languageManager.getLanguage()]}
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {printLanguages}
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
    </div>
    );
}
 
export default Header;