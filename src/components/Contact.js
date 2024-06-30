import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <main className="main-content">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default Contact;
