import React, { useState } from "react";
import "./contactForm.scss";

export default function ContactForm() {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    reason: "",
    message: "",

    nameError: "",
    emailError: ""
  };

  const [state, setState] = useState(initialState);
  const reasons = [
    "Just to say hi",
    "Business",
    "Software",
    "Electronics",
    "Other"
  ];
  function handleInputChange(event) {
    console.log(state);
    const { name, value } = event.target;
    if (name === "name")
      setState(state => ({ ...state,nameError: "" }));
    if (name === "email")
      setState(state => ({ ...state, emailError: "" }));

    setState(state => ({ ...state, [name]: value }));
  }

  function validate() {
    let nameError = "";
    let emailError = "";
    let error = false;
    if (!state.name){
      nameError = "Your name is required";
      error = true;
    }
    if (!state.email){
      emailError = "Your email is required";
      error = true;
    }
    console.log(emailError);

    if (error) {
      console.log(emailError);
      setState({...state, emailError, nameError});
      return false;
    } 
    return true;
  }

  function submitForm(e) {
    e.preventDefault();
    console.log(state);
    if (validate()) {
      setState(initialState);
      return true;
    } else {
      return false;
    }
  }
  return (
    <form className='contact-form' action="mailto:will.canti2697@gmail.com" method="post" encType="text/plain">
      <label>
        Name*
        <input
          name='name'
          type='text'
          onChange={handleInputChange}
          value={state.name}
          className = {!!state.nameError ? "invalid" : ""}
        />
        <span>{state.nameError}</span>
      </label>
      <label>
        Email Address*
        <input
          name='email'
          type='text'
          onChange={handleInputChange}
          value={state.email}
          className = {!!state.emailError ? "invalid" : ""}
        />
        <span>{state.emailError}</span>
      </label>
      <label>
        Phone
        <input
          name='phone'
          type='number'
          onChange={handleInputChange}
          value={state.phone}
        />
      </label>
      <label>
        Subject
        <input
          name='subject'
          type='text'
          onChange={handleInputChange}
          value={state.subject}
        />
      </label>
      <label>
        Reason*
        <select name='reason' onChange={handleInputChange} value={state.reason}>
          {reasons.map((reason, id) => (
            <option key={id} className={state.reason === reason ? "selected" : ""}>{reason}</option>
          ))}
        </select>
      </label>
      <label>
        Message
        <textarea
          name='message'
          cols='30'
          rows='6'
          onChange={handleInputChange}
          value={state.message}
        ></textarea>
      </label>
      <br/>
      <button type='submit' onClick={submitForm}>
        Submit
      </button>
    </form>
  );
}
