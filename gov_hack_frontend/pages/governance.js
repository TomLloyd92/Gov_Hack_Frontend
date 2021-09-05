import GovNav from '../components/GovNav'
import Results from '../components/ProposalResults'
import React, { Component } from 'react';
import Layout from '../components/Layout';


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
         <main className="px-40 py-6 mb-10 text-center ">
          <p >
          Hello Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Tempore ipsum magnam deleniti maxime accusamus eveniet praesentium voluptatibus id molestias? 
          Nostrum quo nisi quam. Quas facilis repellat voluptatum autem maiores deserunt!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Maxime sapiente voluptatibus vero eius, labore dolor cumque.
          Necessitatibus libero, cumque excepturi facere commodi aspernatur ut neque ratione placeat error magni obcaecati!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Aperiam exercitationem fuga illo. Fuga deserunt corporis rerum suscipit aliquid! Consectetur modi, magni quas neque unde repudiandae accusamus quisquam eligendi vitae alias.
          </p>
        </main>
        </div>
      </Layout>
  )}
}

export default Governance;