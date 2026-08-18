import React from 'react'
import Nav from './Nav/Nav.jsx'
import Page1Content from './page1Content/page1content.jsx'

const Section1 = (props) => {
  return (
    <div className='h-screen w-full bg-amber-800'>
        <Nav/>
        <Page1Content user={props.user}/>
    </div>
  )
}

export default Section1