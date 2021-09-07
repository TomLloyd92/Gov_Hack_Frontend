
import { Component } from "react"
import Timelock from '../ethereum/build/contracts/Timelock.json'
import web3 from "../ethereum/web3";
import { TIMELOCK_ADDRESS } from "../globals";


class TimelockForm extends Component{

    state = {
        addresstarget:'',
        value: '',
        calldataSig:'',
        calldataDataTypes: '',
        calldataDataValues: '',
        eta: '',
        encodedData: ''
    };


 onSubmit =  async (event) =>
    {

        /*
        0xdBB3c808157907bd6c64938E5AdD1943A3d391d9
        0
        setPendingAdmin(address)
        address
        0xdBB3c808157907bd6c64938E5AdD1943A3d391d9
        */
       
        //console.log(this.state.addresstarget)
        //console.log(this.state.value);
        //console.log(this.state.calldataSig);
        //console.log(this.state.calldataDataTypes);
        //console.log(this.state.calldataDataValues);

        //Prevent Default
        event.preventDefault();

        //Encode the data types and data
        await this.setState({encodedData: web3.eth.abi.encodeParameters([this.state.calldataDataTypes], [this.state.calldataDataValues])});
        
        console.log(this.state.encodedData)
        //Instance of Timelock
        var timelock = new web3.eth.Contract(Timelock.abi, TIMELOCK_ADDRESS);
        
        //Get current block
        var currentBlock = await timelock.methods.getBlockTimestamp().call();
        currentBlock = Number(currentBlock)
        console.log(currentBlock);
        var eta = await currentBlock + 100;
        await this.setState({eta: eta});
        console.log(this.state.eta);


        // //Send Transaction
        try{
            const accounts = await web3.eth.getAccounts();
            
            await timelock.methods.queueTransaction(
                TIMELOCK_ADDRESS,
                this.state.value,
                this.state.calldataSig,
                this.state.encodedData,
                this.state.eta ).send({
                from:accounts[0]
            })

        }catch(err){
            console.log(err);
        }
    }

    execute =  async (event) =>
     {
        //Instance of Timelock
        var timelock = new web3.eth.Contract(Timelock.abi, TIMELOCK_ADDRESS);

        try{
            const accounts = await web3.eth.getAccounts();            

                await timelock.methods.executeTransaction(
                TIMELOCK_ADDRESS,
                this.state.value,
                this.state.calldataSig,
                this.state.encodedData,
                this.state.eta ).send({
                from:accounts[0]
           })
        }
           catch(err){
            console.log(err);
           }
     }


    render()
    {
        return(
            <main className="grid w-full  place-content-center">
                <form onSubmit={this.onSubmit}>
                <div className="rounded-lg">
                    <div className="bg-[#8632e6] rounded-lg w-96">
                        <div className="px-10 pt-6 mb-10 text-center">
                            <div className="mb-0 text-3xl font-bold text-white">TIME LOCK</div>
                            <span className="text-sm text-white space-y-6">
                            </span>
                            <div className="pt-8">
                                <input 
                                    class="bg-[#e033e7] rounded w-full py-2 px-4 text-black text-center leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                                    id="" 
                                    type="" 
                                    placeholder="Enter Target Address" 
                                    value={this.state.addresstarget}
                                    onChange={event => this.setState({addresstarget: event.target.value})}
                                    ></input>
                            </div>
                            <div className="pt-8">
                                <input 
                                    class="bg-[#e033e7] rounded w-full py-2 px-4 text-black text-center leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                                    id="" 
                                    type="" 
                                    placeholder="Enter Value" 
                                    value={this.state.value}
                                    onChange={event => this.setState({value: event.target.value})}
                                    ></input>
                            </div>
                                              <div className="pt-8">
                                <input 
                                    class="bg-[#e033e7] rounded w-full py-2 px-4 text-black text-center leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                                    id="" 
                                    type="" 
                                    placeholder="Enter Function Name and Arguments" 
                                    value={this.state.calldataSig}
                                    onChange={event => this.setState({calldataSig: event.target.value})}
                                    ></input>
                            </div>
                            <div className="pt-8">
                                <input 
                                    class="bg-[#e033e7] rounded w-full py-2 px-4 text-black text-center leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                                    id="" 
                                    type="" 
                                    placeholder="Enter Call Data Types" 
                                    value={this.state.calldataDataTypes}
                                    onChange={event => this.setState({calldataDataTypes: event.target.value})}
                                    ></input>
                            </div>
                                            <div className="pt-8">
                                <input 
                                    class="bg-[#e033e7] rounded w-full py-2 px-4 text-black text-center leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                                    id="" 
                                    type="" 
                                    placeholder="Enter Call Values" 
                                    value={this.state.calldataDataValues}
                                    onChange={event => this.setState({calldataDataValues: event.target.value})}
                                    ></input>
                            </div>

                        </div>
                        <button
                            className="w-full h-16 text-lg font-extrabold text-white transition duration-300 bg-purple-600 rounded-b-lg hover:bg-purple-700">Queue Function!
                        </button>
 
                    </div>
                </div>
            </form>
            <button
                onClick={this.execute}
                className="w-full h-16 text-lg font-extrabold text-white transition duration-300 bg-purple-600 rounded-b-lg hover:bg-purple-700">Execute Function!
            </button>
        </main>
        )
    }
}

export default TimelockForm;