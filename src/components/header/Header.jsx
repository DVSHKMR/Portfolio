import React from 'react'
import Typed from 'react-typed'
import './header.css'
import CTA from './CTA'
// import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 className="text-light"><Typed strings={[' Devesh Kumar']} typeSpeed={200} backSpeed={200} loop></Typed></h1>
        <h5>Front End Developer</h5>
        <CTA />
    <HeaderSocial />

        {/* <div className="me">
          <img src={ME} alt="ME" />
        </div> */}

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header