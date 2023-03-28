import React from "react";

class IdeButtons extends React.Component {

    render() {
        return (
            <div className="buttons dashboard">
                <button className="btn" onClick={() => alert("Sono un pulsante che salva il file in cui stai scrivendo il codice")}>
                    <img src={process.env.PUBLIC_URL + '/save-button-icon.png'} alt="Save File Code Button" width="30px"/>
                </button>
                <button className="btn" onClick={() => alert("Sono un pulsante che salva tutti i file in cui stai scrivendo il codice")}>
                    <img src={process.env.PUBLIC_URL + '/save-all-button-icon.png'} alt="Save All Files Code Button" width="30px"/>
                </button>
                <button className="btn" onClick={() => alert("Sono un pulsante che esegue il file in cui hai scritto il codice")}>
                    <img src={process.env.PUBLIC_URL + '/play-button-green-icon.webp'} alt="Play Code Button" width="30px"/>
                </button>
                <button className="btn" onClick={() => alert("Sono un pulsante che effettua il debugging del file in cui stai scrivendo il codice")}>
                    <img src={process.env.PUBLIC_URL + '/bug-button-green-icon.png'} alt="Debug Code Button" width="30px"/>
                </button>
                <button className="btn" onClick={() => alert("Sono un pulsante che ferma l'esecuzione del file selezionato")}>
                    <img src={process.env.PUBLIC_URL + '/stop-button-red-icon.jpg'} alt="Stop Code Button" width="30px"/>
                </button>
                <button className="btn" onClick={() => alert("Sono un pulsante che apre la console del terminale in uso nel sistema operativo")}>
                    <img src={process.env.PUBLIC_URL + '/console-button-icon.png'} alt="Console Button" width="30px"/>
                </button>
            </div>
        );
    }

}

export default IdeButtons;
