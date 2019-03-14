import React from 'react'
import styled from 'styled-components'
import Heading from '../atoms/Heading'
import Paragraph from '../atoms/Paragraph'
import Hero from '../molecules/Hero'
import Link from '../atoms/Link'

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  > * {
    width: calc(50% - 2rem);
  }
`

const StyledHeading = styled(Heading)`
  text-align: center;
`

const Description = styled(Paragraph)`
  text-align: center;
  margin: 2rem;
`

const StyledHero = styled(Hero)`
  margin: 1rem;
`

const HeroList = ({heroList}) => {
    return (
        <div>
            <StyledHeading>Gotham City</StyledHeading>
            <Description>
                Gotham City (/ˈɡɒθəm/ GOTH-əm), or simply Gotham, is a fictional city appearing in American comic books
                published
                by DC Comics, best known as the home of Batman. The city was first identified as Batman's place of
                residence in
                Batman #4 (December 1940) and has since been the primary setting of stories featuring the
                character.<br/>
                <Link href="https://batman.fandom.com/wiki/Gotham_City">Learn more about Gotham</Link>
            </Description>
            <Grid>
                {
                    heroList.map(({icon, link, title, quote, dead, description}) => (
                        <StyledHero
                            icon={icon}
                            link={link}
                            title={title}
                            quote={quote}
                            dead={dead}
                        >
                            {description}
                        </StyledHero>
                    ))}
            </Grid>
        </div>
    )
};


export default HeroList
