import React, {useState} from 'react';
import axios from 'axios';

const Contact = () => {
    const [emailInputs, setEmailInput] = useState({
      email: "",
      name: "",
      message: "",
      sent: false,
    });

    const handleEmailChange = (e) => {
      const { name, value } = e.target;
      setEmailInput({ ...emailInputs, [name]: value });
    };

    const sendContactEmail = () => {
      axios
        .post("/api/send-email", {
          name: emailInputs.name,
          email: emailInputs.email,
          message: emailInputs.message,
        })
        .then(() => {
          setEmailInput({ email: "", name: "", message: "", sent: true });
          setTimeout(() => {
            setEmailInput({ sent: false });
          }, 3000);
        })
        .catch((err) => console.log(err));
    };

    return (
      <section className="contact-container">
        <section className="contact-me">
          <h1>Contact Me</h1>
          {emailInputs.sent ? (
            <section className="sent-message">
              <p>Message Sent!</p>
              <p>Thanks for sending me an email!</p>
            </section>
          ) : null}
          <input
            value={emailInputs.name}
            name="name"
            placeholder="Name"
            onChange={(e) => handleEmailChange(e)}
          />
          <input
            value={emailInputs.email}
            name="email"
            placeholder="Email"
            onChange={(e) => handleEmailChange(e)}
          />
          <textarea
            value={emailInputs.message}
            name="message"
            placeholder="Message"
            onChange={(e) => handleEmailChange(e)}
          />
          <button onClick={sendContactEmail}>
            Send Message
          </button>
        </section>
      </section>
    );
}

export default Contact;