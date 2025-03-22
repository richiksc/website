import React from "react";
export function ContactForm() {
  return (
    <div className="form-container">
      <form name="contact" netlify>
        <p>
          <label htmlFor="contact_name">Name</label>
          <input
            type="text"
            name="name"
            id="contact_name"
            placeholder="Your Name"
          />
        </p>
        <p>
          <label htmlFor="contact_email">Email</label>
          <input
            type="email"
            name="email"
            id="contact_email"
            placeholder="your.email@company.com"
          />
        </p>
        <p>
          <label htmlFor="contact_message">Message</label>
          <textarea
            name="message"
            id="contact_message"
            placeholder="I've got this idea for..."
          ></textarea>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
}

export function GetInTouch() {
  return (
    <section id="contact">
      <div
        className="decoration decoration--right decoration--blue"
        aria-hidden="true"
      ></div>
      <div className="contact-text">
        <h1>Get in touch</h1>
        <p>Want to work with me? Have an idea for a project? Let's chat.</p>
      </div>
      <ContactForm />
    </section>
  );
}
