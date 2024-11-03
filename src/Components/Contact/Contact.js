import React, { useRef } from 'react'
import './Contact.css'
import Instagram from '../../assests/instagram-removebg-preview.png'
import Linkedin from '../../assests/linkedin-removebg-preview.png'
import Github from '../../assests/github-removebg-preview.png'
import Twitter from '../../assests/twitter-removebg-preview.png'
import Youtube from '../../assests/yt-removebg-preview.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  //EmailJs 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ya9dza9', 'template_dgsc2fa', form.current, {
        publicKey: 'a3dFr4B4ElzDIfiBQ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert("Email Sent! ")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contact">
        <h2 className="contactPageTitle">Contact Me</h2>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder='Your name' name='your_name'/>
            <input type="email" className="email" placeholder='Your Email' name='your_email'/>
            <textarea  className='msg' name="message" rows='5' placeholder='Your Message'></textarea>
            <button type='submit' value='Send' className='submitBtn'>Submit</button>
            <div className="links">
                <img src={Linkedin} alt="LinkedIn" className="link" onClick={()=> window.open("https://www.linkedin.com/in/naman29saini", "_blank")}/>
                <img src={Instagram} alt="Instagram" className="link" onClick={()=> window.open("https://instagram.com/naman29saini", "_blank")}/>
                <img src={Github} alt="Github" className="link link1" onClick={()=> window.open("https://github.com/naman29saini", "_blank")}/>
                <img src={Youtube} alt="Youtube" className="link" onClick={()=> window.open("https://youtube.com/@namansainiyt?si=bK3KNj-jYH8wewBo", "_blank")}/>
                <img src={Twitter} alt="Twitter" className="link link1 x" onClick={()=> window.open("https://twitter.com/naman29sainii", "_blank")} />
            </div>
        </form>
    </section>
  )
}

export default Contact
