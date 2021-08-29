import Results from '../components/Results'
import React, { Component } from 'react';
import Layout from '../components/Layout';
import TokenNav from '../components/TokenNav';

class MetaToken extends Component
{
  render()
  {
    return (
      <Layout>
        <h1 className="neonPink">[Meta Token]
        </h1>
        <TokenNav/>
        <div>
          <Results/>
        </div>
      </Layout>
  )}
}

export default MetaToken;