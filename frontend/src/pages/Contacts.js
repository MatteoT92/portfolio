import React from 'react';
import { SocialIcon } from 'react-social-icons';
import Footer from '../components/Footer';

class Contacts extends React.Component {

    sendMessage = (e) => {
        e.preventDefault();
        const form = e.target;

        fetch('http://localhost:8080/api/contacts', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                category: form.category,
                name: form.name.value,
                email: form.email.value,
                message: form.message.value
            })
        }).then(res => res.json())
        .then(data => {
            console.log(data);
            alert(data.message);
        });
        form.reset();
    }

    render() {
        return (
            <div className="contact">
                <h2>Contattami</h2>
                <div className="container">
                    <div className="form-contact">
                        <form onSubmit={this.sendMessage}>
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
                                <button type="submit" class="btn send">Invia</button>
                                <button type="reset" class="btn abort">Annulla</button>
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