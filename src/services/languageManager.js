import CONST from '../data/constant.js';

export default class {
    constructor()
    {
        this.getLanguage();
    }

    getLanguage()
    {
        if (!localStorage.getItem(CONST.language.webstorageKey)) {
            if (navigator.language && navigator.language.includes(CONST.language.en)) {
                localStorage.setItem(CONST.language.webstorageKey, CONST.language.en);
                return CONST.language.en;
            }
 
            localStorage.setItem(CONST.language.webstorageKey, CONST.language.es);
            return CONST.language.es;
        }
        
         return localStorage.getItem(CONST.language.webstorageKey);  
    }

    setLanguage(language) 
    {
        localStorage.removeItem(CONST.language.webstorageKey);

        if (language == CONST.language.es || language == CONST.language.en) {
            localStorage.setItem(CONST.language.webstorageKey, language);
        }else {
            localStorage.setItem(CONST.language.webstorageKey, CONST.language.en);
        }

        window.location.reload();
    }
}