import React, { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

function ChatRoom() {

  const socket = new SockJS('http://localhost:8080/chat-websocket');
  const stompClient = Stomp.over(socket);
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showChat, setShowChat] = useState(false);

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
              <div key={index}>
                <span>{message.name}: </span>
                <span>{message.message}</span>
                <span>{message.time}</span>
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
                <button type="submit">
                    <img src={process.env.PUBLIC_URL + '/send-icon.png'} alt="Send Icon" width="30px"/>
                </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatRoom;