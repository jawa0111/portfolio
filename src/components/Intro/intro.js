import React from 'react';
import './intro.css';
import bg from '../../assets/portf.png'


const Intro = () => {
    return(
        <section id="intro">
            <div className="introContent">
            <span className="hello">Hello,</span>
<span className="introText">I'm <span className="introName">Jude Jawakker</span></span><span className="roles"> IT Undergraduate</span>

               <p className="introPara">Embrace opportunities for rapid learning and dedicated collaboration
                ,<br/> eagerly contributing to the company's success while expertise in web development.<br/>
                Demonstrate unwavering confidence in crafting impactful digital experiences,<br/>
                leveraging skills and insights to excel as a Web Developer.</p>  
               
            </div> 
            <img src={bg} alt="profile" className="bg"></img> 
        </section>
    )
}

export default Intro;