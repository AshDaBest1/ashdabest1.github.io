import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2>Contact Information</h2>
      
      <div className="contact-info">
        <h3>Job Seeking Email</h3>
        <a href="mailto:abedalaziz.halloumeh@gmail.com">abedalaziz.halloumeh@gmail.com</a>
        
        <h3>Phone</h3>
        <p>+961 71 137 484</p>
        
        <h3>Alternative Contact</h3>
        <a href="mailto:abedhalloumeh36@gmail.com">abedhalloumeh36@gmail.com</a>
      </div>
      
      {/* <form className="contact-form">
        <h3>Send Me a Message</h3>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        
        <button type="submit" className="btn">Send Message</button>
      </form> */}
    </section>
  );
};

export default Contact;