import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css"; // Import the CSS file for styling

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState(""); // Add state for mobile number
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      from_mobile: mobile, // Include mobile number in template parameters
      message: message,
    };

    emailjs
      .send(
        "service_ujhfc79", // Replace with your EmailJS service ID
        "template_fussydn", // Replace with your EmailJS template ID
        templateParams,
        "3C3fVFGcM9AiK46tw" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Email sent successfully!");
        },
        (err) => {
          console.error("FAILED...", err);
          setStatus("Failed to send email.");
        }
      );

    // Optionally, you can clear the form fields after submission
    setName("");
    setEmail("");
    setMobile(""); // Clear mobile number field
    setMessage("");
  };

  return (
    <div className="contact-form-main-container">
      <div className="contact-form-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="tel"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        {status && <p>{status}</p>}
      </div>

      <div className="contact-form-container enquiry-main-container">
        <h2>For Enquiry</h2>
        <div className="enquiry-page-container">
          <div className="enquiry-details">
            <img className="enquiry-img" src="/phone.png" alt="" />
            <div className="enquiry-data">
              <h4>
                Phone: <span>07743292211</span>{" "}
              </h4>
            </div>
          </div>
          <div className="enquiry-details">
            <img className="enquiry-img" src="/email.png" alt="" />
            <div className="enquiry-data">
              <h4>
                Email: <span>maalaxmibharatgas1@gmail.com</span>{" "}
              </h4>
            </div>
          </div>
          <div className="enquiry-details">
            <img className="enquiry-img" src="/location.png" alt="" />
            <div className="enquiry-data">
              <h4>
                Location:{" "}
                <span>Maa Laxmi Bharat Gas Agency, Salhewara, dist- KCG</span>{" "}
              </h4>
            </div>
          </div>
          <div className="enquiry-details">
            <div className="enquiry-data">
              <h4>
                <span>feel free to contact us</span>{" "}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
