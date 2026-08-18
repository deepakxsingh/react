import React from 'react'
import RightCardContent from './RightCardContent.jsx'

const RightCard = (props) => {
  return (
    <div>
      <img src={props.user.image} alt="" />
      <RightCardContent user={props.user}/>
    </div>
  )
}

export default RightCard