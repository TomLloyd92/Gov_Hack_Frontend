import Nav from '../components/Nav'
import Results from '../components/Results'
import React, { Component } from 'react';
import Layout from '../components/Layout';


class Governance extends Component
{
  render()
  {
    return (
      <Layout>
        <h1>GOVERNANCE</h1>
        <div>
          <Nav/>
          <Results/>
        </div>
      </Layout>
  )}
}

export default Governance;