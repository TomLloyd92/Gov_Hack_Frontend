import { ReceiptTaxIcon } from "@heroicons/react/outline"
import { Component } from "react"


class TimelockForm extends Component{

    state = {
        addresstarget:'',
        value: '',
        calldataSig:'',
        calldataData: '',
        eta: ''
    };

    onSubmit(){
        console.log("YEETS")
    }

    render()
    {
        return(
               <form onSubmit={this.onSubmit}>
            <main className="grid w-full  place-content-center">
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
                                    onChange={event => this.setState({addresstarget: event.target.addresstarget})}
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
                                    onChange={event => this.setState({calldataSig: event.target.calldataSig})}
                                    ></input>
                            </div>
                            <div className="pt-8">
                                <input 
                                    class="bg-[#e033e7] rounded w-full py-2 px-4 text-black text-center leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                                    id="" 
                                    type="" 
                                    placeholder="Enter Call Data" 
                                    value={this.state.calldataData}
                                    onChange={event => this.setState({calldataData: event.target.calldataData})}
                                    ></input>
                            </div>

                        </div>
                        <button
                            className="w-full h-16 text-lg font-extrabold text-white transition duration-300 bg-purple-600 rounded-b-lg hover:bg-purple-700">Que Function!</button>
                    </div>
                </div>
            </main>
        </form>
        )
    }
}

export default TimelockForm;