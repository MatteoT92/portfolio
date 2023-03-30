package matteot92.portfolio.controller;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

import matteot92.portfolio.model.entities.ChatMessage;

/**
 * @author Matteo Tartaglione
 */
@RestController
public class ChatController {

	/**
	 * Metodo che consente ad un utente di poter inviare un messaggio sul canale topic/chat utilizzando il WebSocket
	 */
    @MessageMapping("/chat")
    @SendTo("/topic/chat")
    @CrossOrigin(origins = "http://localhost:3000")
    public String send(ChatMessage message) throws Exception {
        message.setTime(new SimpleDateFormat("HH:mm dd-MM-yyyy").format(new Date()));
        // Trasforma l'outMessage di tipo ChatMessage in un oggetto JSON
        ObjectMapper mapper = new ObjectMapper();
        mapper.enable(SerializationFeature.INDENT_OUTPUT);
        mapper.registerModule(new JavaTimeModule()); // serializza la data con Jackson JSON
        String json = null;
		try {
			json = mapper.writeValueAsString(message);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return json;
    }

}
