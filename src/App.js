import React, { useState } from 'react'
import Application from './components/Application'
import CTA from './components/CTA'
import Features from './components/Features'
import Hero from './components/Hero'
import HowWork from './components/HowWork'
import LogoCloud from './components/LogoCloud'
import Nav from './components/Nav'
import Number from './components/Number'
import Team from './components/Team'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer'


const App = () => {

  const [menuOpen,setMenuOpen]=useState(false)

  if(menuOpen){
    document.body.style.overflowY = "hidden"
  }else{
    document.body.style.overflowY = "scroll"
  }


  return (
    <>
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <div className=''>
    <Hero />
      <Features />
      <CTA />
      <Number />
      <HowWork />
      <Application />
      <LogoCloud />
      <Team />
      <Testimonial />
      <Contact />
      <Footer/>
    </div>
    </>
  )
}

export default App