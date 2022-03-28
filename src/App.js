import React from 'react'
import CTA from './components/CTA'
import Features from './components/Features'
import Hero from './components/Hero'
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
    </>
  )
}

export default App