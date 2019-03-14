// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'

import PageTemplate from '../templates/PageTemplate'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

const EmptyPage = () => {
  return (
    <PageTemplate
      header={<Header />}
      footer={<Footer />}
    >
      <div> Empty Page</div>
    </PageTemplate>
  )
}

export default EmptyPage
