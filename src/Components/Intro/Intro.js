import React from 'react'
import './Intro.css'
import bg from '../../assests/bg1.png'
import { Link } from 'react-scroll'
import HireMe from '../../assests/hireme.png'
import Resume from '../../assests/resume.png'

const Intro = () => {
  const downloadFile = () => {
    window.location.href = "https://drive.google.com/file/d/1DngusmmU_nzkt42FQiGsu-oRGMRH3EjV/view?usp=sharing"
  }
  return (
    <section id="intro">
        <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Naman Saini </span><br />Full Stack Developer</span>
        <p className="introPara">I am a skilled Full Stack Web Developer having experience of <br />building amazing projects.</p>
        <div className="introBtn">
        <Link><button className="btn" onClick={()=>document.getElementById('contact').scrollIntoView({behavior:"smooth"})}><img src={HireMe} alt="Hire Me" />Hire Me</button></Link>
        <Link><button className="btn" onClick={downloadFile} ><img src={Resume} alt="Resume" />Resume</button></Link>

        </div>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro
