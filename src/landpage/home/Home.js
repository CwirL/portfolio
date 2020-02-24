import React from 'react'
import Navbar from 'navbar/Navbar';
import './home.scss';

export default function Home() {
  return (
    <section className="home">
      <div className="navbar-wrapper"><Navbar theme={"light"} /></div>
      <div className="home-container">
        <h1 className="title">Wilmer Cantillo</h1>
        <p>
          Electronics and self-taught software engineer. 
          In my learning proccess i have developed skills 
          to work on technology environment  and digital 
          transformation.
        </p>
      </div>
    </section>
  )
}
