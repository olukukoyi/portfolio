import React, { useRef, useState } from "react";
import "./Form.css";
import emailjs from "@emailjs/browser";

function Form() {
  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0ybw79n",
        "template_ek75utr",
        form.current,
        "user_9uqHNBk72DXBnHh52fqWM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="form__container">
      <h3>Lets's have a chat</h3>

      <form ref={form} onSubmit={sendEmail} className="form">
        <div className="form__item">
          <label>Name</label>
          <input
            className="form__input"
            spellCheck="false"
            type="text"
            name="name"
          ></input>
        </div>

        <div className="form__item">
          <label>Email</label>
          <input
            className="form__input"
            spellCheck="false"
            type="email"
            name="email"
          ></input>
        </div>
        <div className="form__item">
          <label>Subject</label>
          <input
            className="form__input"
            spellCheck="false"
            type="text"
            name="subject"
          ></input>
        </div>

        <div className="form__item">
          <label>Message</label>
          <textarea className="form__message" name="message"></textarea>
        </div>
        <button className="form__button">Submit</button>
      </form>
    </div>
  );
}

export default Form;
