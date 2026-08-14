import React from 'react'

function Card(props) {
  return (
    <div className="card">
        <img src={props.imgSrc} alt="" />
        <h3> {props.user} </h3>
        <p> {props.p} </p>
    </div>
  )
}

export default Card