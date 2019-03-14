import React from 'react'
import styled from 'styled-components'
import { size } from 'styled-theme'

import Block from '../atoms/Block'
import PrimaryNavigation from '../molecules/PrimaryNavigation'
import IconLink from '../molecules/IconLink'

const Wrapper = styled(Block)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  @media screen and (max-width: 640px) {
    padding: 0.5rem;
  }
`

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${size('maxWidth')};
  > :not(:first-child) {
    margin-left: 1rem;
  }
`

const StyledPrimaryNavigation = styled(PrimaryNavigation)`
  flex: 1
`

const Header = (props) => {
  return (
    <Wrapper opaque reverse {...props}>
      <InnerWrapper>
        <IconLink to="/" icon="batman-logo" height={100} />
        <StyledPrimaryNavigation reverse />
      </InnerWrapper>
    </Wrapper>
  )
}

export default Header
