import React, { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

function ChatBox(props) {

  const socket = new SockJS('http://localhost:8080/chat-websocket');
  const stompClient = Stomp.over(socket);
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showChat, setShowChat] = useState(false);

  const {language} = props;
  const [lang, setLang] = useState(language);

  useEffect(() => {
    setLang(props.language);
  }, [props.language]);

  useEffect(() => {
    stompClient.connect({}, function (frame) {
      stompClient.subscribe("/topic/chat", function (newMessageReceived) {
        if (stompClient.connected) { // verifica lo stato della connessione
          setMessages(prevMessages => [...prevMessages, JSON.parse(newMessageReceived.body)]); // viene aggiunto il messaggio nell'array messages
        }
      });
    });
  }, []); // Esegui solo all'inizializzazione del component

  const sendMessage = () => {
    stompClient.send( // il client invia al server sull'endpoint chat-app/chat,
      "/chat-app/chat", // gestito dal metodo configureMessageBroker della classe main del progetto,
      {}, // il messaggio formattato
      JSON.stringify({
        name: username,
        message: message,
      })
    );
  };

  const disconnect = () => {
    if (stompClient != null) { // verifica che l'oggetto WebSocket non sia nullo
      stompClient.disconnect(); // e effettua il logout
      setShowChat(false); // nasconde la chat
      setUsername(""); // resetta il campo del nome utente
      setMessage(""); // resetta il campo del messaggio
      setMessages([]); // resetta l'array di messaggi
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(); // Invia il messaggio al server
    setMessage(""); // Resetta il campo del messaggio
  };

  if (lang === "ENG") {
    return (
      <div className="chat-container">
          <div className="chat-header">
              <button onClick={() => setShowChat(!showChat)}>
                  <h2>Chat</h2>
                  <img src={process.env.PUBLIC_URL + '/chat-icon.jpg'} alt="Chat Bubble Icon" width="30px"/>
              </button>
          </div>
          {showChat && ( // se showChat è true viene mostrato il seguente div, altrimenti no
          <div className="chat">
            <div className="messages">
              {messages.map((message, index) => ( // per ogni messaggio nell'array viene creato un div col nome utente e testo
              <div key={index} className="message-chat">
                  <span>
                    <strong>{message.name}: </strong>
                  </span>
                  <span>{message.message}</span>
                  <div className="time-chat">
                    <img src={process.env.PUBLIC_URL + '/clock-icon.jpg'} alt="Clock Icon" width="25px"/>
                    {message.time}
                  </div>
                </div>
              ))}
            </div>
            <div className="send-message">
              <form onSubmit={handleSubmit}>
                  <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  id="user"
                  placeholder='Username'
                  />
                  <input
                  type="text"
                  value={message}
                  onChange={handleMessageChange}
                  id="msg"
                  placeholder='Write a message'
                  />
                  <button type="submit" className="send-msg-btn">
                      <img src={process.env.PUBLIC_URL + '/send-button-icon.png'} alt="Send Icon" width="30px"/>
                  </button>
                  <button onClick={disconnect} className="disconnect-btn">
                      <img src={process.env.PUBLIC_URL + '/disconnect-button-icon.webp'} alt="Disconnect Icon" width="30px"/>
                  </button>
              </form>
            </div>
          </div>
        )}
      </div>
    )
  } else {
    return (
      <div className="chat-container">
          <div className="chat-header">
              <button onClick={() => setShowChat(!showChat)}>
                  <h2>Chat</h2>
                  <img src={process.env.PUBLIC_URL + '/chat-icon.jpg'} alt="Icona Bolla Chat" width="30px"/>
              </button>
          </div>
          {showChat && ( // se showChat è true viene mostrato il seguente div, altrimenti no
          <div className="chat">
            <div className="messages">
              {messages.map((message, index) => ( // per ogni messaggio nell'array viene creato un div col nome utente e testo
                <div key={index} className="message-chat">
                  <span>
                    <strong>{message.name}: </strong>
                  </span>
                  <span>{message.message}</span>
                  <div className="time-chat">
                    <img src={process.env.PUBLIC_URL + '/clock-icon.jpg'} alt="Icona Orologio" width="25px"/>
                    {message.time}
                  </div>
                </div>
              ))}
            </div>
            <div className="send-message">
              <form onSubmit={handleSubmit}>
                  <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  id="user"
                  placeholder='Username'
                  />
                  <input
                  type="text"
                  value={message}
                  onChange={handleMessageChange}
                  id="msg"
                  placeholder='Scrivi un messaggio'
                  />
                  <button type="submit" className="send-msg-btn">
                      <img src={process.env.PUBLIC_URL + '/send-button-icon.png'} alt="Icona Invio" width="30px"/>
                  </button>
                  <button onClick={disconnect} className="disconnect-btn">
                      <img src={process.env.PUBLIC_URL + '/disconnect-button-icon.webp'} alt="Icona Disconnessione" width="30px"/>
                  </button>
              </form>
            </div>
          </div>
        )}
      </div>
    )
  }

}

export default ChatBox;