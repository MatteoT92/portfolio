import React, {useEffect, useState} from "react";

function IdeButtons(props) {

    const {language} = props;
    const [lang, setLang] = useState(language);

    useEffect(() => {
        setLang(props.language);
    }, [props.language]);

    if (lang === 'ENG') {
        return (
            <div className="buttons dashboard">
                <button className="btn" onClick={() => alert("I'm a button that saves the file you're writing code to")}>
                    <img src={process.env.PUBLIC_URL + '/save-button-icon.png'} alt="Save File Code Button" width="30px"/>
                </button>
                <button className="btn" onClick={() => alert("I'm a button that saves all the files you're writing code to")}>
                    <img src={process.env.PUBLIC_URL + '/save-all-button-icon.png'} alt="Save All Files Code Button" width="30px"/>
                </button>
                <button className="btn" onClick={() => alert("I'm a button that runs the file you wrote the code in")}>
                    <img src={process.env.PUBLIC_URL + '/play-button-green-icon.webp'} alt="Play Code Button" width="30px"/>
                </button>
                <button className="btn" onClick={() => alert("I'm a button that debugs the file you're coding in")}>
                    <img src={process.env.PUBLIC_URL + '/bug-button-green-icon.png'} alt="Debug Code Button" width="30px"/>
                </button>
                <button className="btn" onClick={() => alert("I'm a button that stops the execution of the selected file")}>
                    <img src={process.env.PUBLIC_URL + '/stop-button-red-icon.jpg'} alt="Stop Code Button" width="30px"/>
                </button>
                <button className="btn" onClick={() => alert("I'm a button that opens the console of the terminal in use in the operating system")}>
                    <img src={process.env.PUBLIC_URL + '/console-button-icon.png'} alt="Console Button" width="30px"/>
                </button>
            </div>
        )
    } else {
        return (
            <div className="buttons dashboard">
                <button className="btn" onClick={() => alert("Sono un pulsante che salva il file in cui stai scrivendo il codice")}>
                    <img src={process.env.PUBLIC_URL + '/save-button-icon.png'} alt="Bottone salvataggio file codice" width="30px"/>
                </button>
                <button className="btn" onClick={() => alert("Sono un pulsante che salva tutti i file in cui stai scrivendo il codice")}>
                    <img src={process.env.PUBLIC_URL + '/save-all-button-icon.png'} alt="Bottone salvataggio tutti i file codice" width="30px"/>
                </button>
                <button className="btn" onClick={() => alert("Sono un pulsante che esegue il file in cui hai scritto il codice")}>
                    <img src={process.env.PUBLIC_URL + '/play-button-green-icon.webp'} alt="Bottone esecuzione codice" width="30px"/>
                </button>
                <button className="btn" onClick={() => alert("Sono un pulsante che effettua il debugging del file in cui stai scrivendo il codice")}>
                    <img src={process.env.PUBLIC_URL + '/bug-button-green-icon.png'} alt="Bottone debug codice" width="30px"/>
                </button>
                <button className="btn" onClick={() => alert("Sono un pulsante che ferma l'esecuzione del file selezionato")}>
                    <img src={process.env.PUBLIC_URL + '/stop-button-red-icon.jpg'} alt="Bottone stop esecuzione codice" width="30px"/>
                </button>
                <button className="btn" onClick={() => alert("Sono un pulsante che apre la console del terminale in uso nel sistema operativo")}>
                    <img src={process.env.PUBLIC_URL + '/console-button-icon.png'} alt="Bottone console" width="30px"/>
                </button>
            </div>
        )
    }

}

export default IdeButtons;
