import React from 'react';
import EmailIcon from 'assets/icons/email-icon.svg';
import LinkedInIcon from 'assets/icons/linkedin-icon.svg';
import GithubIcon from 'assets/icons/github-icon.svg';
import './footer.scss';

export default function Footer() {
  return (
    <section className="footer">
      <div className="subtitle">STAY CONNECTED</div>
      <div className="links-container">
        <a href="#"><img src={EmailIcon} alt=""/></a>
        <a href="https://github.com/CwirL/" target="_blank" rel="noopener noreferrer"><img src={GithubIcon} alt=""/></a>
        <a href="https://www.linkedin.com/in/wilmer-cantillo-9a19b4171/" target="_blank" rel="noopener noreferrer"><img src={LinkedInIcon} alt=""/></a>
      </div>  
    </section>
  )
}