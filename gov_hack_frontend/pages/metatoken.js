import Nav from '../components/Nav'
import Results from '../components/Results'
import React, { Component } from 'react';
import Layout from '../components/Layout';


class MetaToken extends Component
{
  render()
  {
    return (
      <Layout>
        <h1 className="neonPink">[Meta Token]
        </h1>
        <div>
          <Nav/>
          <Results/>
        </div>
      </Layout>
  )}
}

export default MetaToken;