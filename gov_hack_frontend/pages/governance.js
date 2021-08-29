import GovNav from '../components/GovNav'
import Results from '../components/Results'
import React, { Component } from 'react';
import Layout from '../components/Layout';


class Governance extends Component
{
  render()
  {
    return (
      <Layout>
        <h1 className="neonPink">[GOVERNANCE]
        </h1>
        <div>
        <GovNav />
        <Results/>
        </div>
      </Layout>
  )}
}

export default Governance;