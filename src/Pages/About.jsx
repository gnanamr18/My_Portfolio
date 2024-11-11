import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function About({setDisplay}) {
  return (
    <div>
        <div>
            <Navbar setDisplay={setDisplay}/>
        </div>
        <div>
          <p>hello how are you!</p>
        </div>
        <div>
            <Footer setDisplay={setDisplay}/>
        </div>
      
    </div>
  )
}

export default About
