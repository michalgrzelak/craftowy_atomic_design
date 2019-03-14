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
  opacity: ${ifProp('soon', 0.4, 1)};
  @media screen and (max-width: 640px) {
    padding: 0.5rem;
  }
`

const StyledIcon = styled(Icon)`
  flex: none;
  @media screen and (max-width: 640px) {
    width: 32px;
  }
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
  @media screen and (max-width: 640px) {
    top: 0.5rem;
    right: 0.5rem;
  }
`

const Hero = ({
  icon, title, link, code, children, ...props
}) => {
  return (
    <Wrapper {...props}>
      {icon && <StyledIcon icon={icon} width={64} />}
      <Text>
        <Heading level={2}>
          {link ? <Link href={link}>{title}</Link> : title}
        </Heading>
        <Paragraph>{children}</Paragraph>
        {code && <PreformattedText block>{code}</PreformattedText>}
      </Text>
      {props.soon && <StyledBadge palette="grayscale">soon</StyledBadge>}
    </Wrapper>
  )
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  link: PropTypes.string,
  soon: PropTypes.bool,
  children: PropTypes.any,
  code: PropTypes.node,
}

export default Hero
