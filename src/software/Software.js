import React from 'react';
import Repository from './repository/Repository'
import ProjectsDetail from './projects-detail/ProjectsDetail';
import Footer from '../landpage/footer/Footer';
import './software.scss';

export default function Software() {
  return (
    <main>
      <Repository />
      <ProjectsDetail />
      <Footer />
    </main>
  )
}
