// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'

import PageTemplate from '../templates/PageTemplate'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import Hero from "../molecules/Hero";

const HeroPage = () => {
  return (
    <PageTemplate
      header={<Header />}
      footer={<Footer />}
    >
      <Hero />
    </PageTemplate>
  )
}

export default HeroPage
