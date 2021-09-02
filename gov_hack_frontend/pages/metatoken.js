
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

        </div>
      </Layout>
  )}
}

export default MetaToken;