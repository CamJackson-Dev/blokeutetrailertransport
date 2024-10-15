import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the default form submission

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log("Message sent successfully!", result.text);
          // Optionally clear the form
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log("Error sending message:", error.text);
        }
      );
  };

  return (
    <div className="container contact">
      {/* <h2 className="main-title text-center">CONTACT</h2>
      <form onSubmit={sendEmail}>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 mb-1">
              <input
                name="name"
                placeholder="Name"
                className="contact-input"
                value={formData.name}
                onChange={handleChange}
                required // Make this field required
              />
            </div>
            <div className="col-md-4 mb-1">
              <input
                name="email"
                placeholder="Email"
                className="contact-input"
                value={formData.email}
                onChange={handleChange}
                required // Make this field required
              />
            </div>
            <div className="col-md-4 mb-1">
              <input
                name="subject"
                placeholder="Subject"
                className="contact-input"
                value={formData.subject}
                onChange={handleChange}
                required // Make this field required
              />
            </div>
          </div>
        </div>
        <br />
        <div className="col-md-12">
          <textarea
            name="message"
            placeholder="Message"
            className="contact-textarea"
            value={formData.message}
            onChange={handleChange}
            required // Make this field required
          />
        </div>
        <br />
        <div className="row">
          <div className="col-md-12">
            <input className="form-btn" type="submit" value="Send Message" />
          </div>
        </div>
      </form> */}
    </div>
  );
}

export default Contact;
