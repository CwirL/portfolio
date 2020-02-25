import React from 'react'
import Home from './home/Home';
import About from './about/About';
import Work from './work/Work';
import Future from './future/Future';
import Footer from './footer/Footer';
import './landpage.scss';

export default function Landpage() {
  return (
    <div>
      <Home />
      <About />
      <Work />
      <Future />
      <Footer />
    </div>
  )
}
