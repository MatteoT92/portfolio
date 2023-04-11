import React, {Component} from 'react';
import ChatBox from '../components/ChatBox';
import Footer from '../components/Footer';

class Home extends Component {

    render() {
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
                <ChatBox />
                <Footer />
            </div>
        )
    }
    
}

export default Home;