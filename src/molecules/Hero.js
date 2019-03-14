import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ifProp } from 'styled-tools'

import Heading from '../atoms/Heading'
import Link from '../atoms/Link'
import Paragraph from '../atoms/Paragraph'
import PreformattedText from '../atoms/PreformattedText'
import Badge from '../atoms/Badge'
import Icon from '../atoms/Icon'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 1rem;
  box-sizing: border-box;
  opacity: ${ifProp('dead', 0.4, 1)};
`

const StyledIcon = styled(Icon)`
  flex: none;
`

const Text = styled.div`
  margin-left: 1rem;
  overflow: auto;
  > :first-child {
    margin: 0;
  }
`

const StyledBadge = styled(Badge)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`

const Hero = ({
  icon, title, link, quote, children, ...props
}) => {
  return (
    <Wrapper {...props}>
      <StyledIcon icon={icon} width={64} />
      <Text>
        <Heading level={2}>
          <Link href={link}>{title}</Link>
        </Heading>
        <Paragraph>{children}</Paragraph>
        <PreformattedText block>{quote}</PreformattedText>
      </Text>
      {props.dead && <StyledBadge palette="grayscale">dead</StyledBadge>}
    </Wrapper>
  )
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  dead: PropTypes.bool.isRequired,
  children: PropTypes.any,
  quote: PropTypes.node,
}

export default Hero
