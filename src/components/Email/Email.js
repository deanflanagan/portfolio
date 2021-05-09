// import React from "react";
import emailjs from "emailjs-com";

const YOUR_SERVICE_ID = "service_cqf1le7";
const YOUR_TEMPLATE_ID = "template_hz8l3qk";
const YOUR_USER_ID = "user_xOmofptnuXK5Lu2Pwce4h";

export default function EmbeddedEmail() {
  function sendEmail(e) {
    e.preventDefault();
    console.log(Object.keys(emailjs));
    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, e.target, YOUR_USER_ID)
      .then(
        (result) => {
          alert("email sent successfully");
        },
        (error) => {
          alert("error sending email");
        }
      ); //clears the form after sending the email
    e.target.reset();
  }
  return (
    <form onSubmit={sendEmail}>
      {" "}
      <input type="hidden" name="contact_number" />{" "}
      <label for="name">Name</label>
      <input
        id="name"
        type="text"
        name="from_name"
        placeholder="Your name"
      />{" "}
      <label for="email">Email</label>
      <input
        id="email"
        type="email"
        name="reply_to"
        placeholder="Your email"
      />{" "}
      <label for="message">Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Let's talk about it..."
      />{" "}
      <button type="submit">send</button>
    </form>
  );
}
