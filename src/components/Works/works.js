import React from 'react';
import './works.css';
import work1 from '../../assets/PHP.png';
import work3 from '../../assets/java.png';
import work4 from '../../assets/react.png';
import work5 from '../../assets/kotlin.png';


const Works = () => {
    return(
        <section id="works">
        <div className='container'>
            <h1 className='heading'>Projects</h1>
            <span className='skillDesc'>
You may access the respective GitHub repositories of the provided projects by clicking on the corresponding blocks, where you can also explore additional projects.</span>
            <div className='box-container'>
                <a href='https://github.com/jawa0111/mern-showtimelk'>
                <div className='box'>
                <img src={work4} alt='cover'/>  
                    <h3>react</h3>
                    <p>This is a website for event ticketing management</p>
                    
                </div></a>
                <a href='https://github.com/jawa0111/mern-Book-Store'>
                <div className='box'>
                <img src={work4} alt='cover'/>
                    <h3>React</h3>
                    <p>This is a online book store website with multiple features.</p>
                    
                </div></a>
                <a href='https://github.com/jawa0111/php-OnlineBanking'>
                <div className='box'>
                <img src={work1} alt='cover'/>
                    <h3>PHP</h3>
                    <p>This is a website created for online banking.</p>
                    
                </div></a>
                <a href='https://github.com/jawa0111/Java-HelpDesk'>
                <div className='box'>
                <img src={work3} alt='cover'/>
                    <h3>Java</h3>
                    <p>This is a website for Online Help Desk </p>
                   
                </div></a>
               
                <a href='https://github.com/jawa0111/DoIT'>
                <div className='box'>
                <img src={work5} alt='cover'/>
                    <h3>Kotlin</h3>
                    <p>This is a task management mobile app  </p>
                    
                </div></a>
            </div>
            

 
           
     
        </div>
        </section>
        
    );
}

export default Works;