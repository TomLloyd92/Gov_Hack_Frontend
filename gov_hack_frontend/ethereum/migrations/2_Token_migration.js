const Faucet = artifacts.require("Faucet");
const METAToken = artifacts.require("METAToken");
const testAddress = '0x0687c9D588a481F8Fd546417b2FE94b50eA24102';

module.exports = async function (deployer) {
    await deployer.deploy(METAToken, testAddress);
    const metaToken = await METAToken.deployed();
    const metaTokenAddress = metaToken.address;

    await deployer.deploy(Faucet, metaTokenAddress);
    const faucet = await Faucet.deployed();
    const faucetAddress = faucet.address;


    console.log("META TOKEN ADDRESS: " + metaTokenAddress);
    console.log("FAUCET ADDRESS: " + faucetAddress);    
};
