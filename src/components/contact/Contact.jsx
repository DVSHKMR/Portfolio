import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FiTwitter} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j7hp8js', 'template_kbq79hk', form.current, 'wxqyrokJyPhmg-z7y')
      
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
              <article className="contact__option">
                <MdOutlineEmail className='contact__option-icon'/>
                <h4>Email</h4>
                <h5>ashudevesh654@gmail.com</h5>
                <a href="mailto:ashudevesh654@gmail.com" target='_blank'>Send a Message</a>
              </article>

              <article className="contact__option">
                <FiTwitter className='contact__option-icon'/>
                <h4>Twitter</h4>
                <h5>@DeveshK57608595</h5> 
                {/* https://m.me/yourfacebookname-if you want to add your */}
                <a href="https://twitter.com/DeveshK57608595" target='_blank'>Send a Message</a>
              </article>

              <article className="contact__option">
                <BsWhatsapp className='contact__option-icon'/>
                <h4>WhatsApp</h4>
                <h5>Devesh Kumar</h5>
                <a href="https://api.whatsapp.com/send?phone=+917532016979" target='_blank'>Send a Message</a>
              </article>
        </div>
        {/* End of contact options */}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact