import React from 'react'
import './Skills.css'
import KUK from '../../assests/kuk.png'
import SPS from '../../assests/sps.png'

const Skills = () => {
  return (
    <div>
      <section id="skills">
        <span className="skillTitle">About Me</span>
        <span className="skillDesc">Motivated student with a strong willingness to learn and contribute, eager to
                apply classroom knowledge to real-world experiences. Effective communicator
                with a collaborative mindset, ready to bring fresh perspectives and a strong
                work ethic to any team</span>
        <span className="skillTitle2">Education</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={KUK} alt="KUK logo" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>
                    Bachelor of Technology, Computer
                    Science Engineering (2021-25)
                    </h2>
                    <h3>UNIVERSITY INSTITUTE OF ENGINEERING
                        AND TECHNOLOGY, KURUKSHETRA
                        UNIVERSITY, KURUKSHETRA
                    </h3>
                    <ul>
                        <li>Secured 9.28 CGPA</li>
                        <li>National Cadet Corps-Senior Division</li>
                    </ul>
                </div>
            </div>
            <div className="skillBar">
                <img src={SPS} alt="SPS logo" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>
                    12th Class (2020-21)
                    </h2>
                    <h3>SAINI PUBLIC SCHOOL, KURUKSHETRA
                    </h3>
                    <ul>
                    <li>93.4% CBSE</li>
                    <li>Head Boy of Organisation</li>
                    </ul>
                </div>
            </div>
            <div className="skillBar">
                <img src={SPS}alt="SPS logo" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>
                    10th Class (2018-19)
                    </h2>
                    <h3>SAINI PUBLIC SCHOOL, KURUKSHETRA
                    </h3>
                    <ul>
                        <li>95.6% CBSE</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
