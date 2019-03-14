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
    @media screen and (max-width: 640px) {
      width: 100%;
    }
  }
`

const StyledHeading = styled(Heading)`
  text-align: center;
`

const Description = styled(Paragraph)`
  text-align: center;
  margin: 2rem;
  @media screen and (max-width: 640px) {
    margin: 1rem;
  }
`

const StyledHero = styled(Hero)`
  margin: 1rem;
  @media screen and (max-width: 640px) {
    margin: 0;
  }
`

const HeroList = ({ ...props }) => (
  <div {...props}>
    <StyledHeading>Gotham City</StyledHeading>
    <Description>
      Gotham City (/ˈɡɒθəm/ GOTH-əm), or simply Gotham, is a fictional city appearing in American comic books published
      by DC Comics, best known as the home of Batman. The city was first identified as Batman's place of residence in
      Batman #4 (December 1940) and has since been the primary setting of stories featuring the character.<br/>
      <Link href="https://batman.fandom.com/wiki/Gotham_City">Learn more about Gotham</Link>
    </Description>
    <Grid>
      <StyledHero
        icon="batman"
        link="https://dc.fandom.com/wiki/Batman_(Bruce_Wayne)"
        title="Batman"
        code="Because I'm Batman"
      >
        Batman is the superhero protector of Gotham City, a man dressed like a bat who fights against evil and strikes
        terror into the hearts of criminals everywhere.
      </StyledHero>
      <StyledHero
        icon="joker"
        link="https://dc.fandom.com/wiki/Joker_(New_Earth)"
        title="Joker"
        code="Have you ever danced with the devil in the pale moonlight?"
      >
        The Joker is a homicidal maniac and the archenemy of Batman. His real name and origin are unknown, but one of
        the most common versions indicates that he fell into a vat of chemicals which turned his skin white and his hair
        green.
      </StyledHero>
      <StyledHero
        icon="nightwing"
        link="https://dc.fandom.com/wiki/Richard_Grayson_(New_Earth)"
        title="Nightwing"
        code=" I've seen too much to be Robin, but I'm still too optimistic to be Batman. I'm Nightwing."
      >
        <Link href="https://dc.fandom.com/wiki/Richard_Grayson_(New_Earth)">Dick Grayson</Link> is a vigilante in the
        Batman Family and the original hero known as Robin. Eventually, he outgrew this position and was inspired by
        Superman to become Nightwing, while Jason Todd and Tim Drake succeeded him as Robin.
      </StyledHero>
      <StyledHero
        icon="penguin"
        link="https://dc.fandom.com/wiki/Oswald_Cobblepot_(New_Earth)"
        title="Penguin"
        code="Just the pussy i've been lookin' for'"
      >
        The Penguin is a fancy criminal and self-styled entrepreneur, who uses his business as a front to cover his
        criminal activities. Penguin started as many criminals in Gotham City, by performing crimes with a specific
        theme surrounding birds.
      </StyledHero>
    </Grid>
  </div>
)

export default HeroList
