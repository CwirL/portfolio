import React from 'react'
import Home from './home/Home';
import About from './about/About';
import Work from './work/Work';
import './landpage.scss';

export default function Landpage() {
  return (
    <div>
      <Home />
      <About />
      <Work />
    </div>
  )
}
