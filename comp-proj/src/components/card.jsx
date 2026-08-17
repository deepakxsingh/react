import React from 'react'

function Card(props){
  return (
       
    
      <div className="card">
        <div className="logo-save">
          <img src={props.logo} alt="logo" />
          <button className="save-button">Saved <img src="https://static.vecteezy.com/system/resources/thumbnails/012/528/048/small_2x/simple-save-icon-isolated-on-white-background-bookmark-symbol-modern-simple-for-web-site-or-mobile-app-vector.jpg" alt="save" /> </button>

          
        </div>
        <div className="name"><h4>{props.name}</h4> <h5>{props.day} days ago</h5></div>
        <h2>{props.role}</h2>
        <div className="moreinfo"><span>{props.status}</span><span>{props.type}</span></div>
        <div className="belowinfo">
        <div className="money-location"><div>{props.salary}</div> <p>{props.location}</p></div>
        <button className="apply-button">Apply Now</button>
        </div>
      </div>
   
   
  )
}

export default Card