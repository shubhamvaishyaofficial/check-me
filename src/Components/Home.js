import React from 'react'
import './Home.css'


const Home = () => {
  return (
    <div>
  <div className="hero">
<div className="search-wrapper">
    <div className="input-holder">
        <input type="text" className="search-input" placeholder="Type to search" />
        <button className="search-icon"><span></span></button>
    </div>
    
</div>
<div className="credit">Made with <span className='soak'>❤</span> by <a className='ahdk'  href="https://www.learningrobo.com/">Learning Robo</a></div>
  </div>
    </div>
  )
}

export default Home
