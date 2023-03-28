import React from 'react';
import Footer from '../components/Footer';
import IdeButtons from '../components/IdeButtons';

class About extends React.Component {

    render() {
        return (
            <div>
                <IdeButtons />
                <div class="ide">
                    <h1>Chi sono?</h1><br/>
                    <code>
                        <span className="line-numbers">1</span>Bella domanda!<br/>
                        <span className="line-numbers">2</span>Visto che me lo hai chiesto, te lo dico!<br/>
                        <span className="line-numbers">3</span>Sono un programmatore junior appassionato che ha trascorso gli ultimi anni a programmare script di codice in diversi linguaggi.<br/>
                        <span className="line-numbers">4</span>Ho iniziato a programmare da autodidatta nel linguaggio <strong>Python</strong>.<br/>
                        <span className="line-numbers">5</span>Da ottobre 2021 mi sono iscritto al corso di programmazione software Developer 4.0, presso l'<a href="https://www.apuliadigitalmaker.it/">ITS Apulia Digital Maker</a> alla sede di Foggia (FG).<br/>
                        <span className="line-numbers">6</span>Quì ho appreso principalmente altri linguaggi di programmazione lato back-end, come <strong>Java</strong> e <strong>C#</strong>, e di interrogazione/manipolazione dati tramite query <strong>SQL</strong>.<br/>
                        <span className="line-numbers">7</span>Da gennaio 2023 sto collaborando in stage presso la società <a href="https://www.exprivia.it/it/">Exprivia S.p.A.</a>.<br/>
                        <span className="line-numbers">8</span>Durante lo stage, ho avuto modo di poter lavorare in team su progetti e apprendere nuove tecnologie quali:<br/>
                        <span className="line-numbers">9</span><strong>Angular</strong>, <strong>React</strong>, <strong>TypeScript</strong>, <strong>Spring</strong>, <strong>JUnit Test</strong>, <strong>Git</strong>, <strong>Bash</strong>.<br/>
                        <span className="line-numbers">10</span>Alcuni di questi progetti sono anche pubblicati sul mio profilo <a href="https://github.com/MatteoT92">GitHub</a>.<br/>
                        <span className="line-numbers">11</span>Nel caso li volessi dare un'occhiata? &#128521;
                    </code>
                </div>
                <Footer />
            </div>
        )
    }

}

export default About;