import React from 'react';

import LinkIcon from 'assets/icons/link-dark-icon.svg';
import './about.scss';
export default function About() {
  return (
    <section className='about container' id='about'>
      <h1 className='title'>About Me</h1>
      <p>
        I have always like learning new stuff, that’s why i find technology and
        science so interesting, and also why i study engineering. You can find
        my resume here <img src={LinkIcon} alt=""></img> <br/> As a student of 
        electronics ingeeniring at Universidad del Norte in Barranquilla i 
        developed skills working on multiple projects.
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
