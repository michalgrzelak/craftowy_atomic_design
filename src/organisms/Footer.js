import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import Paragraph from '../atoms/Paragraph'
import Icon from '../atoms/Icon'
import Link from '../atoms/Link'


const Wrapper = styled.div`
  background-color: ${palette('grayscale', 1, true)};
  padding: 2rem;
`

const Credits = styled(Paragraph)`
  vertical-align: center;
  text-align: center;
  margin: 0;
`

const Footer = (props) => {
  return (
    <Wrapper {...props}>
      <Credits>
        Made with <Icon icon="superman" /> by <Link href="https://github.com/michalgrzelak">michalgrzelak</Link>
      </Credits>
    </Wrapper>
  )
}

export default Footer
