import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {IoLogoTwitter} from 'react-icons/io'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com/DVSHKMR" target="_blank"><FaGithub/></a>
      
        <a href="https://www.linkedin.com/in/devesh-kumar-5a32b423b/" target="_blank"><BsLinkedin /></a>
        
        <a href="https://twitter.com/DeveshK57608595" target="_blank"><IoLogoTwitter/></a>
    </div>
  )
}

export default HeaderSocials