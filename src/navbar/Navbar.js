import React, { useState, useRef, useEffect } from 'react';
import LightLogo from 'assets/icons/menu-light-icon.svg';
import DarkLogo from 'assets/icons/menu-dark-icon.svg';
import Me from 'assets/images/me.png';
import './Navbar.scss';

export default function Navbar({ theme }) {
  const [active, setActive] = useState(false);
  const [sticky, setSticky] = useState(false);
  const navRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })
  function handleActive() {
    setActive(!active);
  }
  return (
    <section className={"navbar"} ref={navRef}>
      <div className={"sidenav " + (active ? "active" : "")}>
        <div><img src={Me} alt="" /></div>
        <div><a href="#home">Wilmer Cantillo</a></div>
        <div><a href="#home">Software</a></div>
        <div><a href="#home">Contact</a></div>
      </div>
      <img className={"menu " + (sticky ? "sticky" : "")}  src={theme === "dark" ? DarkLogo : LightLogo} alt="" onClick={handleActive}/>
      <h2>WC</h2>
      <nav className={"navigation " + (sticky ? "sticky" : "")}>
        <a href="#home">Wilmer Cantillo</a>
        <a className="middle" href="#home">Software</a>
        <a href="#home">Contact</a>
      </nav>
    </section>
  )
}
