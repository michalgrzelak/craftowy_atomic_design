// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'

import PageTemplate from '../templates/PageTemplate'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import HeroList from '../containers/HeroList'

const HeroPage = () => {
  return (
    <PageTemplate
      header={<Header />}
      footer={<Footer />}
    >
      <HeroList />
    </PageTemplate>
  )
}

export default HeroPage
