import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-section">
      <h1>Contact Us</h1>
      <p>
        We would love to hear from you! Whether you have questions about our menu, reservations, or anything else, our team is ready to help.
      </p>
      <div className="contact-details">
        <h2>Get in Touch</h2>
        <ul>
          <li>Email: contact@restaurant.com</li>
          <li>Phone: +1 234 567 890</li>
          <li>Address: 123 Main Street, City, Country</li>
        </ul>
      </div>
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="contact-map">
        <h2>Find Us Here</h2>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508616!2d144.95373531531748!3d-37.81627917975152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5dfc9e22ab%3A0x5045675218ce4b0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sau!4v1613989902432!5m2!1sen!2sau"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
