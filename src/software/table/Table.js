import React from 'react';

import LinkIcon from 'assets/icons/link-dark-icon.svg';
import Projects from '../projects-detail';
import './table.scss';

export default function Table() {
  return (
    <table className="repository">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Technology/Language</th>
          <th>Created at</th>
        </tr>
      </thead>
      <tbody>
        {Projects.map((project, id) => 
        <tr key={id}>
          <td>{project.title} {!!project.website ? <a href={project.website} target="_blank" rel="noopener noreferrer"><img className="link-icon" src={LinkIcon} alt=""/></a> :"" }</td>
          <td>{project.description}</td>
          <td>{project.lang}</td>
          <td>{project.date}</td>
        </tr>)}
      </tbody>
    </table>
  )
}
