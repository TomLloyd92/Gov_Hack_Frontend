
import React, {Component} from 'react';


class CoinFaucet extends Component
{
    state = {
        value: '',
        errorMessage: '',
        loading: false
    };

       onSubmit =  async (event) =>
    {
        event.preventDefault();

        console.log(this.state.value)
        /*
        const campaign = Campaign(this.props.address);
        this.setState({loading:true, errorMessage: ''});

        try{
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send(
                {
                    from: accounts[0],
                    value: web3.utils.toWei(this.state.value, 'ether')
                });
                //Refresh the page
        Router.replaceRoute(`/campaigns/${this.props.address}`);
        }catch (err){
            this.setState({errorMessage: err.message});
        }
        */

        this.setState({loading:false, value: ''});
    };


    render(){
        return(
        <form onSubmit={this.onSubmit}>
            <main className="grid w-full  place-content-center">
                <div className="rounded-lg">
                    <div className="bg-[#8632e6] rounded-lg w-96">
                        <img src="https://dailyhodl.com/wp-content/uploads/2021/03/parabolic-crypto.jpg" alt="metaman"
                            className="w-full h-48 transition duration-300 rounded-t-lg sm:h-56 opacity-80 hover:opacity-100" />
            
                        <div className="px-10 pt-6 mb-10 text-center">
                            <div className="mb-0 text-3xl font-bold text-white">META COIN FAUCET</div>
                            <span className="text-sm text-white space-y-6">
                            Meta Coin is what is used to vote on MIP (Meta Improvement Proposals). To get some coin so you can interact with this test net DAO, please click below to recive 100 META coins!
                            </span>
                            <div className="pt-8">
                                <input 
                                    class="bg-[#e033e7] rounded w-full py-2 px-4 text-black text-center leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                                    id="" 
                                    type="" 
                                    placeholder="Enter Amount of META" 
                                    value={this.state.value}
                                    onChange={event => this.setState({value: event.target.value})}
                                    ></input>
                            </div>
                        </div>
                        <button
                            className="w-full h-16 text-lg font-extrabold text-white transition duration-300 bg-purple-600 rounded-b-lg hover:bg-purple-700">SEND FOR META!</button>
                    </div>
                </div>
            </main>
        </form>
    )};
}


/*
green - 0CF630
pink - e033e7
l purp - b332e6
d purp - 8632e6
blue - 5932e6
black - 030214
*/
export default CoinFaucet 