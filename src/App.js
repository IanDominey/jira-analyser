import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/header'
import JiraNav from './components/navbar'
import Body from './components/body'
import { Container, Row } from 'reactstrap'

const App = () =>
  <div>
    <Header/>
    <Container fluid className="App">
      <Row>
        <JiraNav/>
        <Body />
      </Row>
    </Container>
  </div>

export default App
