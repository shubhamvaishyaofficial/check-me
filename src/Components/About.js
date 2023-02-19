import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
  return (
    <div>
        <section className='sectij'>
      <div className = "image">
               <img src="https://cdn.pixabay.com/photo/2017/08/26/23/37/business-2684758__340.png"/>
            </div>

            <div className = "cont content">
                <h2 className='h2y'>About Us</h2>
                <span></span>
                <p className='ppa'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis aspernatur voluptas inventore ab voluptates nostrum minus illo laborum harum laudantium earum ut, 
                    temporibus fugiat sequi explicabo facilis unde quos corporis!</p>
                <ul className = "links">
                    <li><a href = "#">work</a></li>
                    <div class = "vertical-line"></div>
                    <li><Link to='/service'>service</Link></li>
                    <div class = "vertical-line"></div>
                    <li><Link to='/contact'>contact</Link></li>
                </ul>
                <ul className = "icons">
                    <li>
                        <a href='https://twitter.com/shubhamvaish09'><i className = "fa fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/shubhamvaishya.official'><i className = "fa fa-instagram"></i></a>
                    </li>
                    <li>
                        <a href='https://github.com/shubhamvaishyaofficial'><i className = "fa fa-github"></i></a>
                    </li>
                    <li>
                        <i className = "fa fa-pinterest"></i>
                    </li>
                </ul>
            </div>
        </section><br/><br/>
        <div className="credit">Made with <span style={{color:'tomato'}}>❤</span> by <a className='aab' href="https://www.learningrobo.com/">Learning Robo</a></div>
    </div>
  )
}

export default About
