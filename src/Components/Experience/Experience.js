import React from 'react'
import './Experience.css'
import OOHR from '../../assests/oohr-removebg-preview.png'

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="expTitle">Work Experience</h2>
       <div className="exps">
        <div className="exp">
                <img src={OOHR} alt="oohr logo" className="expImg" />
                <div className="expText">
                    <h2>
                    Oohr Innovations Pvt. Ltd. (April 2023- January 2024)
                    </h2>
                    <h3>Web Developer Intern
                    </h3>
                    <ul>
                        <li>Utilized responsive design principles to optimize website accessibility on mobile devices.</li>
                        <li>Revamped websites for improved user experience and enhanced visual
                        aesthetics.</li>
                        <li>Performed thorough testing and debugging to ensure code compatibility
                        across various browsers.</li>
                        <li>Effectively utilized Git to handle source code changes and manage version
                        control.</li>
                    </ul>
                </div>
            </div>
            </div>
        
    </section>
  )
}

export default Experience
