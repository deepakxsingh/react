import React from 'react'
import LeftContent from './LeftContent/LeftContent.jsx'
import RightContent from './RightContent/RightContent.jsx'

const page1content = (props) => {
  return (
    <div>
      <LeftContent  />
      <RightContent user={props.user}/>
    </div>
  )
}

export default page1content