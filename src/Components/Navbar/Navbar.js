import React, { useState } from 'react'
import './Navbar.css'
import Logo from '../../assests/logo1.png'
import HamBurger from '../../assests/menu.png'
import { Link } from 'react-scroll'
import ContactMe from '../../assests/phone.png'

const Navbar = () => {
  const [showMenu,setShowMenu]=useState(false)
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
          document.getElementById('contact').scrollIntoView({behavior:"smooth"})
        }}>
            <img src={ContactMe} alt="Contact Me" className="btnImg" />
            Contact Me
        </button>
        <img src={HamBurger} alt="menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu?'flex':'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} duration={500} offset={-100} className="itemList" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} duration={500} offset={-50} className="itemList" onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} duration={500} offset={-50} className="itemList" onClick={()=>setShowMenu(false)}>Portfolio</Link>
        <Link activeClass='active' to='experience' spy={true} smooth={true} duration={500} offset={-50} className="itemList" onClick={()=>setShowMenu(false)}>Experience</Link>
        <Link activeClass='active' to='additional' spy={true} smooth={true} duration={500} offset={-47}className="itemList" onClick={()=>setShowMenu(false)}>Skills</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} duration={500} offset={-47}className="itemList" onClick={()=>setShowMenu(false)}>Contact me</Link>
        </div>
    </nav>
  )
}

export default Navbar
