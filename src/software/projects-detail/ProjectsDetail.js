import React, { useState, useEffect } from 'react'
import Projects from './projects-detail';
import Dot from './dot/Dot';
import './projectsDetail.scss';

export default function ProjectsDetail() {
  const n = Projects.length;
  const showProjectsArr = [];
  const [projectIndex, setprojectIndex] = useState(0);
  
  function nextProject(next) {
    let idxHolder = projectIndex.valueOf(); 
    idxHolder += next;
    if (idxHolder >= n)
      idxHolder = 0
    if (idxHolder < 0)
      idxHolder = n-1
    setprojectIndex(idxHolder);
  }

  function setCurrentProject(e) {
    setprojectIndex(parseInt(e.target.id));
  }

  function listItems(list) {
    const itemList = []
    list.map((item, id) => {
      itemList.push(<li key={id}>{item}</li>);
    })
    return <ul>{itemList}</ul>
  }

  function projectStack(stack) {
    const stackDivs = [];
    stack.map((field, id) => {
      stackDivs.push(
        <div key={id}>
          <div className="subtitle2">{field.title}</div>
          <div>{field.subtitle}</div>
          {field.items ? listItems(field.items) : ""}
        </div>
      )
    })
    return <div className="stack-container">{stackDivs}</div>
  }

  return (
    <section className="project-detail">
      <h1 className="title">Projects on Detail</h1>
      <div className="projects">
        <div key="id" className="projects-container carousel-container">
          {Projects.map((project, id) =>
            <div className={"project"+ (id === projectIndex ? " active" : "")} key={id}>
              <div><span className="subtitle2">Title: </span><span>{project.title}</span></div>
              <div><span className="subtitle2">Type: </span><span>{project.type}</span></div>
              <div><span className="subtitle2">Description</span><br/><span>{project.description}</span></div>
              <div><span className="subtitle2">Goal</span><br/><span>{project.goal}</span></div>
              <h1 className="subtitle">Technology stack</h1>
              {projectStack(project.stack)}
            </div>
          )}
        </div>
      </div>
      <div className="dot-container">
          {Projects.map((service, i) => <Dot key={i} id={i} event={setCurrentProject} active={ i === projectIndex ? "active" : ""}/>)}
        </div>
    </section>
  )
}
