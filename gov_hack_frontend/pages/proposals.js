import GovNav from '../components/GovNav'
import Results from '../components/ProposalResults'
import React, { Component } from 'react';
import Layout from '../components/Layout';
import ProposalResults from '../components/ProposalResults';


class Governance extends Component
{

// constructor(){
//   this.state = {
//     showProposals: true,
//     showCreateProposal: false
//   }
// }


  render()
  {
    return (
      <Layout>
        <h1 className="neonPink">[GOVERNANCE]
        </h1>
        <div>
        <GovNav />
        </div>
        <ProposalResults></ProposalResults>

      </Layout>
  )}
}

export default Governance;