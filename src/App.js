import React from 'react'
import Application from './components/Application'
import CTA from './components/CTA'
import Features from './components/Features'
import Hero from './components/Hero'
import HowWork from './components/HowWork'
import Nav from './components/Nav'
import Number from './components/Number'

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <CTA />
      <Number/>
      <HowWork/>
      <Application/>
    </>
  )
}

export default App