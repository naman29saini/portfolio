import React from 'react'
import './Experience.css'
import OOHR from '../../assests/oohr-removebg-preview.png'
import NIT from '../../assests/nit2.png'

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="expTitle">Work Experience</h2>
       <div className="exps">
       <div className="exp">
                <img src={NIT} alt="nit logo" className="expImg" />
                <div className="expText">
                    <h2>
                    ISEA Project Phase-lll of MeitY(NIT,KKR) (January 2025- March 2025)
                    </h2>
                    <h3>Ransomware Detection using Transformer Encoder
                    </h3>
                    <ul>
                        <li>Developed a ransomware detection model using Transformer Encoder architecture.</li>
                        <li>Utilized The CIC-MalMem-2022 dataset for training and evaluation.</li>
                        <li>Applied data normalization and standardization using Python libraries (NumPy, Pandas, Scikit-learn).</li>
                        <li>Achieved high accuracy in classification; evaluated model performance using confusion matrix and visualization with Matplotlib/Seaborn.</li>
                    </ul>
                </div>
            </div>

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
