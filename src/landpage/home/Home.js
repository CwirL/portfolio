import React from 'react'
import Navbar from 'navbar/Navbar';
import './home.scss';

export default function Home() {
  return (
    <section className="home">
      <div className="navbar-wrapper"><Navbar theme={"light"} /></div>
    </section>
  )
}
