import React from 'react'
import Card from './components/card.jsx'

const App = () => {
  return (
  <div className='main'>

<Card 
  logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjiOvp6MXrCUMD7_9x01HieBQHFLPePd8uRokw53_eEcw3O0nXlHEfB1H6&s=10" 
  name="Google" 
  day="2" 
  role="UI/UX Designer" 
  status="Full-Time" 
  type="Hybrid" 
  salary="₹18-25 Lakhs" 
  location="Kochi, India" 
/>


<Card 
  logo="https://mailmeteor.com/logos/assets/PNG/Microsoft_Logo_512px.png" 
  name="Microsoft" 
  day="5" 
  role="Graphic Designer" 
  status="Part-Time" 
  type="Remote" 
  salary="₹4-6 Lakhs" 
  location="Noida, India" 
/>


<Card 
  logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2f0U6HVw6nPZh0FFt2_rtoIViUA-1J1cvgMkeqWhwJkWbrZSzrpQgCk4&s=10" 
  name="Netflix" 
  day="14" 
  role="Graphics Artist" 
  status="Contract" 
  type="On-site" 
  salary="₹8-12 Lakhs" 
  location="Hydrabad, India" 
/>


<Card 
  logo="https://blog.adobe.com/en/publish/2020/05/28/media_1cc0fcc19cf0e64decbceb3a606707a3ad23f51dd.png?width=1200&format=pjpg&optimize=medium" 
  name="Adobe" 
  day="Yesterday" 
  role="Visual Designer" 
  status="Full-Time" 
  type="Flexible schedule" 
  salary="₹10-15 Lakhs" 
  location="Delhi, India" 
/>


  
  
  
  </div>
  
  )
}

export default App