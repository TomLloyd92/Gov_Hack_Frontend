import web3 from "../ethereum/web3";

function getAccount() {
    web3.eth.getAccounts().then(e => console.log(e));
}

function ButtonNeon() {
    return (
        <button className="buttonNeon p-2" onClick={getAccount}>Connect Metamask</button>
    )
}

export default ButtonNeon;