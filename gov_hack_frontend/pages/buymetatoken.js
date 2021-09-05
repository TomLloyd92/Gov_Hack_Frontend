
import React, { Component } from 'react';
import Layout from '../components/Layout';
import TokenNav from '../components/TokenNav';
import CoinFaucet from '../components/CoinFaucet';

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
        <CoinFaucet/>
      </Layout>
  )}
}



export default MetaToken;