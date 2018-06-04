/* @flow */
import * as React from 'react'
import PropTypes from 'prop-types'

const Container = ({children}: {children: React.Node}) =>
  <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
    {children}
  </div>

Container.propTypes = {
  children: PropTypes.object
}

export default Container
