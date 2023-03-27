package matteot92.portfolio.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Lazy;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

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
	
    public void sendEmail(String from, String subject, String text) {
        SimpleMailMessage message = new SimpleMailMessage(); 
        message.setFrom(from);
        message.setTo(to); 
        message.setSubject(subject); 
        message.setText(text);
        emailSender.send(message);
    }
	 
}