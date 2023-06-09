import React, {useEffect, useState} from 'react';
import { SocialIcon } from 'react-social-icons';
import Footer from '../components/Footer';

function Contacts(props) {

    const {language} = props;
    const [lang, setLang] = useState(language);

    useEffect(() => {
        setLang(props.language);
    }, [props.language]);

    const sendMessage = (e) => {
        e.preventDefault();

        const form = e.target;

        fetch('/api/contacts', { // effettua una chiamata POST all'endpoint indicato
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({ // converte i seguenti campi del form in un oggetto JSON e li invia al server
                category: form.elements.category.value,
                name: form.elements.name.value,
                email: form.elements.email.value,
                message: form.elements.message.value
            })
        }).then(res => res.json()); // converte il risultato della chiamata in un oggetto JSON

        if (lang === 'ENG') {
            alert('Message sent! We will get back to you soon.');
        } else {
            alert('Messaggio inviato con successo! Riceverai una risposta a breve.');
        }

        form.reset(); // resetta i campi del form
    }

    if (lang === 'ENG') {
        return (
            <div className="contact">
                <h2>Contattami</h2>
                <div className="container">
                    <div className="form-contact">
                        <form onSubmit={sendMessage}>
                            <label htmlFor="category">Category: </label>
                            <select id="category" name="category">
                                <option value="offerte">Collaboration offers</option>
                                <option value="bug">Reporting bugs/improvements on projects</option>
                                <option value="richieste">Information requests</option>
                                <option value="altro">Other</option>
                            </select><br/>
                            <label htmlFor="name">Name: </label>
                            <input type="text" id="name" name="name"/><br/>
                            <label htmlFor="email">Email: </label>
                            <input type="email" id="email" name="email"/><br/>
                            <label htmlFor="message">Message: </label><br/>
                            <textarea id="message" name="message" rows="5" cols="50"></textarea><br/>
                            <div className="buttons">
                                <button type="submit" className="btn send">Send</button>
                                <button type="reset" className="btn cancel">Cancel</button>
                            </div>
                        </form>
                    </div>
                    <div className="social">
                        <SocialIcon url="https://www.linkedin.com/in/matteotartaglione" /><h5>LinkedIn</h5><br/>
                        <SocialIcon url="https://github.com/MatteoT92" /><h5>GitHub</h5><br/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    } else {
        return (
            <div className="contact">
                <h2>Contattami</h2>
                <div className="container">
                    <div className="form-contact">
                        <form onSubmit={sendMessage}>
                            <label htmlFor="category">Categoria: </label>
                            <select id="category" name="category">
                                <option value="offerte">Offerte di collaborazione</option>
                                <option value="bug">Segnalazione bug/migliorie su progetti</option>
                                <option value="richieste">Richieste di informazioni</option>
                                <option value="altro">Altro</option>
                            </select><br/>
                            <label htmlFor="name">Nome: </label>
                            <input type="text" id="name" name="name"/><br/>
                            <label htmlFor="email">Email: </label>
                            <input type="email" id="email" name="email"/><br/>
                            <label htmlFor="message">Messaggio: </label><br/>
                            <textarea id="message" name="message" rows="5" cols="50"></textarea><br/>
                            <div className="buttons">
                                <button type="submit" className="btn send">Invia</button>
                                <button type="reset" className="btn cancel">Annulla</button>
                            </div>
                        </form>
                    </div>
                    <div className="social">
                        <SocialIcon url="https://www.linkedin.com/in/matteotartaglione" /><h5>LinkedIn</h5><br/>
                        <SocialIcon url="https://github.com/MatteoT92" /><h5>GitHub</h5><br/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
    
}

export default Contacts;