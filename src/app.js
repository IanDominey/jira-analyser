/* @flow */

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css'
import Header from './components/header'
import JiraNav from './components/navbar'
import Body from './components/body'
import { Container, Row } from 'reactstrap'
import Authenticator from './components/authenticator'

const App = () =>
  <div>
    <Header/>
    <Container fluid className="App">
      <Row>
        <Authenticator />
        <JiraNav/>
        <Body/>
      </Row>
    </Container>
  </div>

export default App
