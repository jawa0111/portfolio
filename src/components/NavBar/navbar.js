import './navbar.css';
import { Link } from 'react-scroll'; 
import React, { useState } from 'react';
import cv from '../../assets/CV.pdf';
import download from '../../assets/download.png';
import bu from '../../assets/side.png';
import logo from '../../assets/circle (2).png';


const Navbar = () =>{
    const [showMenue,setShowMenue] = useState(false);
    return(
        <nav className="navbar">
            <img src={logo} alt='Logo' className='logo'/>
            <div className="desktopMenue">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenueListItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenueListItem">Skills</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenueListItem">Projects</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenueListItem">Contact Me</Link>
            </div>
            <a href={cv} download><button className="desktopMenueBtn">
            <img src={download} alt=''className='desktopMenueImg'/>Download CV
            </button></a>

                        <img src={bu} alt='Logo' className='mobMenue' onClick={()=>setShowMenue(!showMenue)}/>
            <div className="navMenue" style={{display: showMenue? 'flex':'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenue(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenue(false)}>Skills</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenue(false)}>Projects</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenue(false)}>Contact Me</Link>
            </div>
        </nav>
    );
}

export default Navbar;