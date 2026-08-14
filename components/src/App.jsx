import React from 'react'
import Card from './componets/card'

function App() {
  return (
    <div className="main">
      <Card 
      user='monkey ji ' 
      p="helloo from monkey ji brother kaise ho"
      imgSrc="https://images.pexels.com/photos/38447670/pexels-photo-38447670.jpeg?_gl=1*1iy82wu*_ga*MTI1OTk0MzMuMTc4NTQ4NzUxMw..*_ga_8JE65Q40S6*czE3ODU0ODc1MTMkbzEkZzEkdDE3ODU0ODc1MjMkajUwJGwwJGgw"
       />
      <Card 
      user='nauty monkey ji ' 
      p="helloo from monkey ji 2  keyy haal chal bhaii"
      imgSrc="https://images.pexels.com/photos/7518096/pexels-photo-7518096.jpeg?_gl=1*2oqp9d*_ga*MTI1OTk0MzMuMTc4NTQ4NzUxMw..*_ga_8JE65Q40S6*czE3ODU0ODc1MTMkbzEkZzEkdDE3ODU0ODg4NDMkajQzJGwwJGgw" />
    </div>
    
  )
}

export default App