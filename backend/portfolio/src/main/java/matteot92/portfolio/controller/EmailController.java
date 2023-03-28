package matteot92.portfolio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import matteot92.portfolio.model.entities.Message;
import matteot92.portfolio.model.service.EmailService;

/**
 * @author Matteo Tartaglione
 */
@RestController
@RequestMapping("/api")
public class EmailController {
	
	private EmailService service;
	
	@Autowired 
	@Lazy
	public EmailController(EmailService service) {
		this.service = service;
	}

	@PostMapping("/contacts")
	@CrossOrigin(origins = "http://localhost:3000/contacts")
	public void sendEmail(@RequestBody Message email) {
		String message = email.getName() + "\n" + email.getMessage();
		email.setMessage(message);
		this.service.sendEmail(email);
	}
}
