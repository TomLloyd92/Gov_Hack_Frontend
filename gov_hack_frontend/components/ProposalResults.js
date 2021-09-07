import ProposalCard from "./ProposalCard"
import React, {Component} from 'react';

class ProposalResults extends Component{
    
    static async getInitialProps()
  {
      //const  improvementProposals = await getProposals

      return 0;//{improvementProposals };
  }

  renderProposals(){

    
    //Assign all properties to the card in each campaign 
    //const items = this.props.improvementProposals.map(address => {
    // const items = this.props.campaigns.map(address => {

    //         return{
    //             header: address,
    //             description: (
    //             <Link route={`/campaigns/${address}`}>
    //             <a>Yeet</a>
    //             </Link>
    //             ),
    //             fluid: true
    //         };
    //     });



        const testProposal = [{
            
          id: 1,
          signature: 'callFunction()',
          startBlock: 0,
          endBlock: 5 
        }]
        

    return (<ProposalCard title = {testProposal[0].id}/>);
  }

    render(){
        return(
            <div>
                {this.renderProposals()};
            </div>
        )
    }         
}

export default ProposalResults
