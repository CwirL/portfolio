import React from 'react';

import LinkIcon from 'assets/icons/link-icon.svg';
import './about.scss';
export default function About() {
  return (
    <section className='about' id='about'>
      <h1 className='title'>About Me</h1>
      <p>
        I have always like learning new stuff, that’s why i find technology and
        science so interesting, and also why i study engineering. You can find
        my resume here <img src={LinkIcon} alt=""></img> <br/> Currently spend a lot of time building software and
        developing business ideas with my friends and partners.
      </p>
      <div className="row">
        <div className="column">
          <div className="subtitle">Software developemnt</div>
          <ul>
            <li>Proficient with data structures and algorithms</li>
            <li>Full stack web developer</li>
            <li>Amateur designer</li>
          </ul>
        </div>
        <div className="column">
          <div className="subtitle">Electronics</div>
          <ul>
            <li>Comunication protocols</li>
            <li>Signal and system analysis</li>
            <li>Circuits analysis</li>
            <li>Problem solving</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
