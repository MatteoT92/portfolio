/**
 * 
 */
package matteot92.portfolio.model.entities;

/**
 * @author Matteo Tartaglione
 */
public class Message {
	
	private String category;
	private String name;
	private String email;
	private String message;
	
	public Message() {}
	
	public Message(String category, String name, String email, String message) {
		this.setCategory(category);
		this.setName(name);
		this.setEmail(email);
		this.setMessage(message);
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
}
