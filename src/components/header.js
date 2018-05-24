import React from 'react'
import { Nav } from 'reactstrap'
import { Link } from 'react-router-dom'

const Header = () =>
  <Nav navbar className="navbar-dark sticky-top bg-dark flex-md-nowrap p-0" tag="nav">
    <Link to="/" className="navbar-brand col-sm-3 col-md-2 mr-0">Jira Analyser</Link>
  </Nav>

export default Header
