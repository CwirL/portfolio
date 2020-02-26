import React from 'react';
import Repository from './repository/Repository'
import './software.scss';
import ProjectsDetail from './projects-detail/ProjectsDetail';

export default function Software() {
  return (
    <main>
      <Repository />
      <ProjectsDetail />
    </main>
  )
}
