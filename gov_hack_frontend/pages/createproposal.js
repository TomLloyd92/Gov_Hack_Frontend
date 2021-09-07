import GovNav from '../components/GovNav'
import React, { Component } from 'react';
import Layout from '../components/Layout';
import CreateProposalForm from '../components/CreateProposalForm'


class CreateProposal extends Component
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
        <CreateProposalForm/>

      </Layout>
  )}
}

export default CreateProposal;