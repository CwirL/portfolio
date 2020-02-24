import React, { useState, useEffect } from 'react';
import LightLogo from 'assets/icons/menu-light-icon.svg';
import DarkLogo from 'assets/icons/menu-dark-icon.svg';
import Me from 'assets/images/me.png';
import './Navbar.scss';

export default function Navbar({ theme }) {
  const [active, setActive] = useState(true);
  function handleActive() {
    setActive(!active);
    console.log(active);
  }
  return (
    <section className="navbar">
      <div className={"sidenav " + (active ? "active" : "")}>
        <div><img src={Me} alt=""/></div>
        <div><a href="#">Wilmer Cantillo</a></div>
        <div><a href="#">Software</a></div>
        <div><a href="#">Contact</a></div>
      </div>
      <img className="menu" src={theme === "dark" ? DarkLogo : LightLogo} alt="" onClick={handleActive}/>
      <h2>WC</h2>
      <nav className="navigation">
        <a href="#">Wilmer Cantillo</a>
        <a className="middle" href="#">Software</a>
        <a href="#">Contact</a>
      </nav>
    </section>
  )
}
