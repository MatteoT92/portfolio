import React, {useEffect, useState} from 'react';
import ChatBox from '../components/ChatBox';
import Footer from '../components/Footer';

function Home(props) {

    const {language} = props;
    const [lang, setLang] = useState(language);

    useEffect(() => {
        setLang(props.language);
    }, [props.language]);

    if (lang === 'ENG') {
        return (
            <div>
                <div>
                    <h1 className="welcome">
                        <code>print("Hello World!")</code>
                    </h1>
                    <div className="describe">
                        <code>System.out.println("Welcome to my portfolio page!");</code>
                        <code>System.out.println("My name is Matteo Tartaglione and on this site I will briefly describe who I am and what I do.");</code>
                        <code>console.log("From these lines of code you have surely noticed that I am a programmer?");</code>
                        <code>Console.WriteLine("If you think my profile is valid and interesting, don't hesitate to contact me!");</code>
                        <code>/*Feel free to leave me a comment*/</code>
                    </div>
                </div>
                <ChatBox language={language} />
                <Footer />
            </div>
        )
    } else {
        return (
            <div>
                <div>
                    <h1 className="welcome">
                        <code>print("Hello World!")</code>
                    </h1>
                    <div className="describe">
                        <code>System.out.println("Benvenuti sulla mia pagina portfolio!");</code>
                        <code>System.out.println("Mi chiamo Matteo Tartaglione e in questo sito ti descriverò brevemente chi sono e cosa faccio.");</code>
                        <code>console.log("Da queste righe di codice avrai certamente notato che sono un programmatore?");</code>
                        <code>Console.WriteLine("Se ritieni valido ed interessante il mio profilo non esitare a contattarmi!");</code>
                        <code>/*Sentiti libero di lasciarmi un commento*/</code>
                    </div>
                </div>
                <ChatBox language={language} />
                <Footer />
            </div>
        )
    }
}

export default Home;