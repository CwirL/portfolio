import React, { useState } from 'react'

import LinkIcon from 'assets/icons/link-icon.svg';
import Projects from '../projects-detail';
import Dot from './dot/Dot';
import './projectsDetail.scss';

export default function ProjectsDetail() {
  const [projectIndex, setprojectIndex] = useState(3);

  function setCurrentProject(e) {
    setprojectIndex(parseInt(e.target.id));
  }

  function listItems(list) {
    const itemList = []
    list.map((item, id) => {
      return itemList.push(<li key={id}>{item}</li>);
    })
    return <ul>{itemList}</ul>
  }

  function projectStack(stack) {
    const stackDivs = [];
    stack.map((field, id) => {
      return stackDivs.push(
        <div key={id} className={field.title.toLowerCase()}>
          <div className="subtitle2">{field.title} {field.title === "Design" && !!field.design_link  ? <a href={field.design_link} target="_blank" rel="noopener noreferrer"><img className="link-icon" src={LinkIcon} alt=""/></a> :"" } </div>
          <div>{field.subtitle}</div>
          {field.items ? listItems(field.items) : ""}
        </div>
      )
    })
    return <div className="stack-container">{stackDivs}</div>
  }

  return (
    <section className="project-detail" id="project-detail">
      <h1 className="title">Projects on Detail</h1>
      <div className="projects">
        <div key="id" className="projects-container carousel-container">
          {Projects.map((project, id) =>
          {
            return <div className={"project"+ (id === projectIndex ? " active" : "")} key={id}>
              <div><span className="subtitle2">Title: </span><span>{project.title} {!!project.github ? <a href={project.github} target="_blank" rel="noopener noreferrer"><img className="link-icon" src={LinkIcon} alt=""/></a> :"" }</span></div>
              <div><span className="subtitle2">Type: </span><span>{project.type}</span></div>
              <div><span className="subtitle2">Description: </span><span className="break">{project.description}</span></div>
              <div><span className="subtitle2">Goal: </span><span className="break">{project.goal}</span></div>
              <h1 className="subtitle">Technology stack</h1>
              {project.web ?  projectStack(project.stack):
                <div>
                  <div className="subtitle2">{project.stack.subtitle}</div>
                  {listItems(project.stack.items)}
                </div>
              }
            </div>            
})}
        </div>
      </div>
      <div className="dot-container">
          {Projects.map((service, i) => <Dot key={i} id={i} event={setCurrentProject} active={ i === projectIndex ? "active" : ""}/>)}
        </div>
    </section>
  )
}
