/* eslint-disable import/prefer-default-export */
import React from 'react'
import PropTypes from 'prop-types'
import {Text} from './typo'
import theme from '../../theme'
import {Box, StyleDim} from './box'

export const Figure = ({label, value, postfix}) => (
  <Box m="0 0 1em">
    <span>{label}</span>
    <Text css={{wordBreak: 'break-all'}}>{value}</Text>{' '}
    {postfix && <Text>{postfix}</Text>}
    <style jsx>{`
      span {
        color: ${theme.colors.muted};
        display: block;
        margin-bottom: 0.5em;
      }
    `}</style>
  </Box>
)

Figure.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  postfix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

export const Absolute = ({
  bg,
  top,
  left,
  bottom,
  right,
  zIndex,
  children,
  ...boxProps
}) => (
  <div>
    <Box {...boxProps}>{children}</Box>
    <style jsx>{`
      div {
        background: ${bg};
        position: absolute;
        left: ${left};
        right: ${right};
        top: ${top};
        bottom: ${bottom};
        z-index: ${zIndex};
        width: ${boxProps.w};
      }
    `}</style>
  </div>
)

Absolute.propTypes = {
  bg: PropTypes.string,
  top: StyleDim,
  left: StyleDim,
  bottom: StyleDim,
  right: StyleDim,
  zIndex: PropTypes.number,
  children: PropTypes.node,
}

export const Fill = props => (
  <Absolute top={0} left={0} bottom={0} right={0} zIndex={1} {...props} />
)

Fill.propTypes = {
  bg: PropTypes.string,
  zIndex: PropTypes.number,
}
