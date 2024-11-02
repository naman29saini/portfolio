import React from 'react'
import './Navbar.css'
import Logo from '../../assests/logo1.png'
import { Link } from 'react-scroll'
import ContactMe from '../../assests/phone.png'

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={Logo} alt="logo" className='logo'/>
        <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} duration={500} offset={-100} className="desktopMenuItemList">Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} duration={500} offset={-50} className="desktopMenuItemList">About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} duration={500} offset={-50} className="desktopMenuItemList">Portfolio</Link>
        <Link activeClass='active' to='experience' spy={true} smooth={true} duration={500} offset={-50} className="desktopMenuItemList">Experience</Link>
        <Link activeClass='active' to='additional' spy={true} smooth={true} duration={500} offset={-47}className="desktopMenuItemList">Skills</Link>
        </div>
        <button className="desktopMenuBtn" onClick={()=>{
          document.getElementById('contact').scrollIntoView({behaviour:'smmoth'})
        }}>
            <img src={ContactMe} alt="Contact Me" className="btnImg" />
            Contact Me
        </button>
    </nav>
  )
}

export default Navbar
