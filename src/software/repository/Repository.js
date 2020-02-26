import React from 'react';
import Navbar from 'navbar/Navbar';
import Table from '../table/Table';
import './repository.scss';

export default function Repository() {
  return (
    <section className="repository">
      <div className="navbar-wrapper"><Navbar theme={"dark"} /></div>
      <h1 className="title">Software Repository</h1><br/>
      <div className="table-wrapper"><Table /></div>
    </section>
  )
}
