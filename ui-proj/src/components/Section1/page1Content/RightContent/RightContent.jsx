import React from 'react'
import RightCard from './RightCard.jsx'


const RightContent = (props) => {
  return (
    <div>
      <RightCard user={props.user}/>
    </div>
  )
}

export default RightContent