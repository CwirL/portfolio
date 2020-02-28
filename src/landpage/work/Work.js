import React from "react";
import LinkIcon from "assets/icons/link-icon.svg";
import './work.scss';

export default function Work() {
  return (
    <section className='my-work container' id='work'>
      <h1 className='title'>My Work</h1>
      <p>
      You can see detail description of my projects in projects section.
      Currently I spend a lot of time building software and 
      developing business ideas with my friends and partners.
      </p>
      <div className="subtitle">Projects I’m currently working on</div>
      <ul>
        <li><b>Orange Logistica </b> <br/> Description: Digital platform for supply chain management.</li>
        <li><b>Caja Naranja <a href="https://cajanaranja.com.co/" target="_blank" rel="noopener noreferrer"><img className="link-icon" src={LinkIcon} alt=""/></a> </b><br/>Description: Web application for on-demmand warehousing.</li>
      </ul>
    </section>
  );
}
