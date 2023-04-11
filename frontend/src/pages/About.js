import React, {useEffect, useState} from 'react';
import Footer from '../components/Footer';
import IdeButtons from '../components/IdeButtons';

function About(props) {

    const {language} = props;
    const [lang, setLang] = useState(language);

    useEffect(() => {
        setLang(props.language);
    }, [props.language]);

    if (lang === 'ENG') {
        return (
            <div>
                <IdeButtons language={language} />
                <div class="ide">
                    <h1>Who I am?</h1><br/>
                    <code>
                        <span className="line-numbers">1</span>Good question!<br/>
                        <span className="line-numbers">2</span>Since you asked, I tell you!<br/>
                        <span className="line-numbers">3</span>I'm an junior programmer who has spent the last few years coding script code in several languages.<br/>
                        <span className="line-numbers">4</span>I started programming as a self-taught in the <strong>Python</strong> language.<br/>
                        <span className="line-numbers">5</span>Since October 2021 I have enrolled in the Developer 4.0 software programming course, at the <a href="https://www.apuliadigitalmaker.it/">ITS Apulia Digital Maker</a> in Foggia (FG).<br/>
                        <span className="line-numbers">6</span>Here I mainly learned other back-end side programming languages, as <strong>Java</strong> and <strong>C#</strong>, and of querying/manipulating data via <strong>SQL</strong> query.<br/>
                        <span className="line-numbers">7</span>Since January 2023 I have been collaborating on an internship at the company called <a href="https://www.exprivia.it/it/">Exprivia S.p.A.</a>.<br/>
                        <span className="line-numbers">8</span>During the internship, I was able to work in teams on projects and learn new technologies such as:<br/>
                        <span className="line-numbers">9</span><strong>Angular</strong>, <strong>React</strong>, <strong>TypeScript</strong>, <strong>Spring</strong>, <strong>JUnit Test</strong>, <strong>Git</strong>, <strong>Bash</strong>.<br/>
                        <span className="line-numbers">10</span>Some of these projects are also published on my <a href="https://github.com/MatteoT92">GitHub</a> profile.<br/>
                        <span className="line-numbers">11</span>In case you want to check them out? &#128521;
                    </code>
                </div>
                <Footer />
            </div>
        )
    } else {
        return (
            <div>
                <IdeButtons language={language} />
                <div class="ide">
                    <h1>Chi sono?</h1><br/>
                    <code>
                        <span className="line-numbers">1</span>Bella domanda!<br/>
                        <span className="line-numbers">2</span>Visto che me lo hai chiesto, te lo dico!<br/>
                        <span className="line-numbers">3</span>Sono un programmatore junior che ha trascorso gli ultimi anni a programmare script di codice in diversi linguaggi.<br/>
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