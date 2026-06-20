import { useState } from "react";
import API from "../api/courseApi";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [messages, setMessages] = useState([]);
  const [showMessages, setShowMessages] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await API.post("/contact", formData);
      alert("Message Sent Successfully");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }
  }

  async function fetchMessages() {
    if (showMessages) {
      setShowMessages(false);
      return;
    }

    setLoading(true);

    try {
      const response = await API.get("/contact");
      setMessages(response.data || []);
      setShowMessages(true);
    } catch (error) {
      console.error(error);
      alert("Failed to load messages");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="page-container contact-page">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you.</p>
      </div>

      <div className="contact-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
          />

          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
          />

          <textarea
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={(e) =>
              setFormData({
                ...formData,
                message: e.target.value,
              })
            }
          />

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-panel">
          <button type="button" className="contact-btn" onClick={fetchMessages}>
            {loading
              ? "Loading..."
              : showMessages
              ? "Hide Received Messages"
              : "Received Messages"}
          </button>

          {showMessages && (
            <div className="contact-form received-messages">
              <h3>Received Messages</h3>
              {messages.length === 0 ? (
                <p>No messages yet.</p>
              ) : (
                messages.map((msg) => (
                  <div key={msg._id} className="message-card">
                    <p>
                      <strong>Name:</strong> {msg.name}
                    </p>
                    <p>
                      <strong>Email:</strong> {msg.email}
                    </p>
                    <p>
                      <strong>Message:</strong> {msg.message}
                    </p>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        <div className="contact-info">
          <h3>Reach us</h3>
          <p>Email: hello@skillhub.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Location: Online • Global</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
