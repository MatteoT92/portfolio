package matteot92.portfolio.model.entities;

/**
 * @author Matteo Tartaglione
 */
public class ChatMessage extends Message {
	
	private String time;
	
	public ChatMessage() {}
	
	public ChatMessage(String name, String message) {
		super.setName(name);
		super.setMessage(message);
	}
	
	public ChatMessage(String name, String message, String time) {
		super.setName(name);
		super.setMessage(message);
		this.setTime(time);
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

}
