
import React, { Component } from 'react';
import web3 from '../ethereum/web3';

class IDCard extends Component
{

    static async getInitialProps(props)
    {
        const accounts = await web3.eth.getAccounts();
        const account = await accounts[0];

        const seven = 7;

        return {account, seven};
    }

    getInfo = async() =>
    {

    }


  render()
  {
    return (
        <div>  
            ID = {this.props.account}
            S = {this.props.seven}
            {console.log(this.props.account)}
            {console.log(this.props.seven)}
        </div>

  )}
}

export default IDCard;