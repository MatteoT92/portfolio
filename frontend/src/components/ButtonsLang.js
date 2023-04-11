import React, {useEffect, useState} from 'react'

function ButtonsLang(props) {

    const { language, funcLangIta, funcLangEng } = props;
    const [lang, setLang] = useState(language);

    useEffect(() => {
        setLang(props.language);
    }, [props.language]);

    if (lang === 'ENG') {
        return (
            <div className="flags">
                <button onClick={funcLangIta}>
                    <img src={process.env.PUBLIC_URL + '/IT.svg'} alt="Italian flag" id="it" />
                    ITA
                </button>
                <button onClick={funcLangEng}>
                    <img src={process.env.PUBLIC_URL + '/GB.svg'} alt="British flag" id="gb" />
                    ENG
                </button>
            </div>
            )
    } else {
        return (
            <div className="flags">
                <button onClick={funcLangIta}>
                    <img src={process.env.PUBLIC_URL + '/IT.svg'} alt="Bandiera italiana" id="it" />
                    ITA
                </button>
                <button onClick={funcLangEng}>
                    <img src={process.env.PUBLIC_URL + '/GB.svg'} alt="Bandiera britannica" id="gb" />
                    ENG
                </button>
            </div>
            )
    }
    
}

export default ButtonsLang;