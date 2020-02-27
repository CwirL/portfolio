import React from 'react';
import Projects from '../projects-detail';
import './table.scss';

export default function Table() {
  console.log(Projects);
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
          <td>{project.title}</td>
          <td>{project.description}</td>
          <td>{project.lang}</td>
          <td>{project.date}</td>
        </tr>)}
      </tbody>
    </table>
  )
}
