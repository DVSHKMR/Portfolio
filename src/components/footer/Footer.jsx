import React from 'react'
import './footer.css'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Devesh Kumar</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/DVSHKMR" target="_blank"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/devesh-kumar-5a32b423b/" target="_blank"><BsLinkedin/></a>
        <a href="https://twitter.com/DeveshK57608595" target="_blank"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Devesh Kumar. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer