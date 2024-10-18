import React, { useState } from 'react';
import './Contact.css';  // Importing CSS for styling

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, like sending data to the backend
    console.log(formData);
    alert("Thank you for reaching out! We'll get back to you soon.");
  };

  return (
    <div className="contact-container">

      {/* Contact Header Section */}
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Please reach out to us using the form below or through our contact details.</p>
      </header>

      {/* Contact Form Section */}
<section className="contact-form-section">
  <h2 className="contact-header">Get in Touch</h2>
  <form onSubmit={handleSubmit} className="contact-form">
    <div className="form-group">
      <label htmlFor="name">Your Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Enter your name"
      />
    </div>
    <div className="form-group">
      <label htmlFor="email">Your Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="Enter your email"
      />
    </div>
    <div className="form-group">
      <label htmlFor="message">Your Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        placeholder="Write your message here"
      />
    </div>
    <button type="submit" className="submit-btn">Send Message</button>
  </form>
</section>


      {/* Contact Information Section */}
      <section className="contact-info-section">
        <h2>Our Contact Information</h2>
        <div className="contact-details">
          <p><strong>Address:</strong> GHV (India) Pvt. Ltd., First Floor, AML Center - 1, Mahakali Caves Road, Andheri (East),
            Mumbai - 400093 India.</p>
          <p><strong>Phone:</strong> (022) 67250016</p>
          <p><strong>Email:</strong> info@ghvgroup.com</p>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="map-section">
        <h2>Find Us Here</h2>
        <div className="map">
          {/* Embed a Google Map */}
          <iframe
            title="Google Map"
            src={`https://www.google.com/maps/embed/v1/place?q=GHV%20Infra%20Projects%20Limited&key=AIzaSyAjJMn4HjNV5_J7sNJmJMdR5acT_tlcdTM`}
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="social-media-section">
        <h2>Connect with Us</h2>
        <div className="social-media-links">
          <div className="social-media-item">
            <img src="facebook icon 1.png" alt="Facebook Logo" className="social-logo" />
            <a href="https://facebook.com/ghvinfra" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </div>
          <div className="social-media-item">
            <img src="twitter icon.png" alt="Twitter Logo" className="social-logo" />
            <a href="https://twitter.com/ghvinfra" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
          <div className="social-media-item">
            <img src="linkedin icon.png" alt="LinkedIn Logo" className="social-logo" />
            <a href="https://linkedin.com/company/ghvinfra" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </section>



      {/* Footer Section */}
      <footer className="footer-section">
        <p>©2024 GHV Infra Projects Limited. All Rights Reserved | Designed & Developed By GHV group Pvt Ltd.</p>
      </footer>

    </div>
  );
}

export default Contact;
