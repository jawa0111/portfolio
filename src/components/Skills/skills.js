import React from 'react';
import './skills.css';
import java from '../../assets/java.png';
import web from '../../assets/html.png';
import ML from '../../assets/ML.png';

const Skills = () =>{
    return (
        <section id='skills'>
            <span className='skillTitle'>What I Do</span>
            <span className='skillDesc'>An IT undergraduate student possesses proficiency in programming languages like Java, Python, C++, JavaScript, PHP, and Kotlin, 
                along with knowledge of Agile and Scrum methodologies. They excel in problem-solving, algorithm design, and debugging, while also 
                demonstrating strong communication, teamwork, and time management skills. </span>
             <div className='skillBars'>
                <div className='skillBar'>
                    <img src={web} alt='' className="skillBarImg"/>
                    <div className='skillBarText'>
                        <h2>Web Development</h2>
                        <p>I am a skilled web developer with expertise in a 
                            wide range of web technologies and frameworks.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={java} alt='' className="skillBarImg"/>
                    <div className='skillBarText'>
                        <h2>Java Programming</h2>
                        <p>I am a Java programmer with a solid foundation in Java programming concepts and a commitment to continuous learning.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={ML} alt='' className="skillBarImg"/>
                    <div className='skillBarText'>
                        <h2>Machine Learning</h2>
                        <p>I am a passionate machine learning enthusiast with a solid foundation in fundamental concepts.</p>
                    </div>
                </div>
             </div>
        </section>
    );
}

export default Skills;