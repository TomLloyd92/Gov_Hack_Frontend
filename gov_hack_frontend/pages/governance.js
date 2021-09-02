import GovNav from '../components/GovNav'
import Results from '../components/ProposalResults'
import React, { Component } from 'react';
import Layout from '../components/Layout';
import ProposalCard from '../components/ProposalCard';


class Governance extends Component
{

constructor(){
  this.state = {
    showProposals: true,
    showCreateProposal: false
  }
}


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