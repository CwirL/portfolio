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
        <div><a href="/">Wilmer Cantillo</a></div>
        <div><a href="/projects">Projects</a></div>
        <div><a href="/contact">Contact</a></div>
      </div>
      <img className={"menu " + (sticky ? "sticky" : "")}  src={theme !== "dark" || sticky ?  LightLogo : DarkLogo} alt="" onClick={handleActive}/>
      <h2>WC</h2>
      <nav className={"navigation" + (sticky ? " sticky" : "") + (theme === "dark" ? " dark" : "")}>
        <a href="/">Wilmer Cantillo</a>
        <a className="middle" href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </nav>
    </section>
  )
}
