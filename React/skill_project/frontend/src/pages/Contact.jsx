import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    alert("Message Sent Successfully");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
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
