import data from '../data/header.js'

export default class {
    constructor(languageManager)
    {
        this.languageManager = languageManager;
    }

    printLanguages()
    {
        const languages = data.languages[this.languageManager.getLanguage()];
        const setLanguage =  (language) => this.languageManager.setLanguage(language);

        return Object.keys(languages).map(index =>
            <a className="dropdown-item" href="#" key={index}
               value={index} onClick={()=> setLanguage(index)}>
                {languages[index]}
            </a>
        )
    }
}