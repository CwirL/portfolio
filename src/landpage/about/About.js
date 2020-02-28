import React from 'react';

import LinkIcon from 'assets/icons/link-dark-icon.svg';
import './about.scss';
export default function About() {
  return (
    <section className='about container' id='about'>
      <h1 className='title'>About Me</h1>
      <p>
        I have always like learning new stuff, that’s why I find technology and
        science so interesting, and also why I study engineering. You can find
        my resume here <a href="https://www.dropbox.com/s/oq6efezwyrwc88g/Resume.pdf?dl=0" target="_blank" rel="noopener noreferrer"><img src={LinkIcon} alt=""></img></a> <br/> As a student of 
        electronics ingeeniring at Universidad del Norte in Barranquilla I 
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
