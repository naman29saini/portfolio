import React from 'react'
import './Intro.css'
import bg from '../../assests/bg1.png'
import { Link } from 'react-scroll'
import HireMe from '../../assests/hireme.png'

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Naman Saini </span><br />Full Stack Developer</span>
        <p className="introPara">I am a skilled Full Stack Web Developer having experience of <br />building amazing projects.</p>
        <Link><button className="btn"><img src={HireMe} alt="Hire Me" />Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro
