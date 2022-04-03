import React from 'react'
import Application from './components/Application'
import CTA from './components/CTA'
import Features from './components/Features'
import Hero from './components/Hero'
import HowWork from './components/HowWork'
import LogoCloud from './components/LogoCloud'
import Nav from './components/Nav'
import Number from './components/Number'
import Team from './components/Team'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from './components/Testimonial'

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <CTA />
      <Number />
      <HowWork />
      <Application />
      <LogoCloud />
      <Team />
      <Testimonial />
    </>
  )
}

export default App