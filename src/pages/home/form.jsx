import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./style.scss";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_9yunc7o", "template_t0lkzpn", form.current, "C54tn-twSkDHu5KOB").then(
      (result) => {
        alert("Message was send, thank you!");
      },
      (error) => {
        alert(error.text);
      }
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form">
      <input type="email" name="user_email" className="input" placeholder="Enter your email" />
      <input type="submit" value="SEND" className="button" />
    </form>
  );
};

export default Form;
