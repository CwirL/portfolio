import React from 'react'
import './dot.scss';

export default function Dot(props) {
  return (
  <div id={props.id} className={"dot " + props.active} onClick={props.event}>{props.id + 1}</div>
  )
}
