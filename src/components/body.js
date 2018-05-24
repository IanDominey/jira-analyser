import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Cfd from './cfd'
import Flow from './flow'

const Body = () =>
  <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
    <Route exact path="/" render={() =>
      <Redirect to="/cfd" />
    } />
    <Route path="/cfd" component={Cfd} />
    <Route path="/flow" component={Flow} />
  </main>

export default Body
