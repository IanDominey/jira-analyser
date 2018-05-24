import React from 'react'
import { NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const JiraNav = () =>
  <nav className="col-md-2 d-none d-md-block bg-light sidebar">
    <div className="sidebar-sticky">
      <ul className="nav flex-column">
        <NavItem>
          <Link to="/cfd" className="nav-link">CFD</Link>
        </NavItem>
        <NavItem>
          <Link to="/flow" className="nav-link">Flow</Link>
        </NavItem>
      </ul>
    </div>
  </nav>

export default JiraNav
