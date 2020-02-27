import React from 'react';
import Navbar from 'navbar/Navbar';
import ContactForm from './contact-form/ContactForm';
import './contact.scss';

export default function Contact() {
  return (
    <section className="contact">
      <Navbar theme={"dark"} />
      <h1 className="title">Send Me An Email</h1>
      <div className="form-wrapper"><ContactForm /></div>
    </section>
  )
}
