// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'

import PageTemplate from '../templates/PageTemplate'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import Hero from "../molecules/Hero";

const HeroPage = () => {
    return (
        <PageTemplate
            header={<Header/>}
            footer={<Footer/>}
        >
            <Hero
                icon={"batman"}
                link={"https://dc.fandom.com/wiki/Batman_(Bruce_Wayne)"}
                title={"Batman"}
                quote={"Because I'm Batman"}
                dead={false}
            >
                Batman is the superhero protector of Gotham City, a man dressed like a bat who fights against evil and
                strikes terror into the hearts of criminals everywhere.
            </Hero>
        </PageTemplate>
    )
}

export default HeroPage
