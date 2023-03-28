package matteot92.portfolio.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Lazy;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

import matteot92.portfolio.model.entities.Message;

/**
 * @author Matteo Tartaglione
 */
@Component
public class EmailService {
	
    private JavaMailSender emailSender;
    @Value("${spring.mail.username}")
	private String to;
	
	@Autowired
	@Lazy
	public EmailService(JavaMailSender emailSender) {
		this.emailSender = emailSender;
	}
	
    public void sendEmail(Message email) {
        SimpleMailMessage message = new SimpleMailMessage(); 
        message.setFrom(email.getEmail());
        message.setTo(to); 
        message.setSubject(email.getCategory()); 
        message.setText(email.getMessage());
        emailSender.send(message);
    }
	 
}