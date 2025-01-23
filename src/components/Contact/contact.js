import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import ins from '../../assets/insta.png';
import git from '../../assets/git.png';
import lin from '../../assets/linkedin.png';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_7gr8k5r', 'template_1rhq8wv', form.current, {
            publicKey: '8tXEAndSBcJPTieMj',
          })
          .then(
            (result) => {
              console.log(result.text);
              alert('Email Sent !');
              e.target.reset();
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return(
        <section id='contactPage'>
           <div id='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work 
                opportunities.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Your Name' name='your_name'/>
                    <input type='email' className='email' placeholder='Your Email' name='your_email'/>
                    <textarea  className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
                    <button type='submit' value='send' className='submitBtn'>Submit</button>
                    <div className='links'>
                        <a href="https://www.linkedin.com/in/jude-jawakker"><img src={lin} alt="Linkedin" className='link'/></a>
                        <a href="https://github.com/jawa0111"><img src={git} alt="GitHub" className='link'/></a>
                        <a href="https://www.instagram.com/_.jawakker._/"><img src={ins} alt="Instagram" className='link'/></a>
                    </div>
                </form>
            </div> 
        </section>
    );
}

export default Contact;