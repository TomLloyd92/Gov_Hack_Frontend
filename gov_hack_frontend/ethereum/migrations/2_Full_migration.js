const Faucet = artifacts.require("Faucet");
const METAToken = artifacts.require("METAToken");
const ErrorDecoder = artifacts.require("ErrorDecoder");
const SafeMath = artifacts.require("SafeMath");
const Timelock = artifacts.require("Timelock");
const GovernorAlpha = artifacts.require("GovernorAlpha")

const testAddress = '0x0687c9D588a481F8Fd546417b2FE94b50eA24102';
const daysDelay = 0;

module.exports = async function (deployer) {
    //META TOKEN
    await deployer.deploy(METAToken, testAddress);
    const metaToken = await METAToken.deployed();
    const metaTokenAddress = metaToken.address;

    //FAUCET
    await deployer.deploy(Faucet, metaTokenAddress);
    const faucet = await Faucet.deployed();
    const faucetAddress = faucet.address;

    //ERROR DECODER
    await deployer.deploy(ErrorDecoder);
    const errorDecoder = await ErrorDecoder.deployed();
    const errorDecoderAddress = errorDecoder.address;

    //SafeMath
    await deployer.deploy(SafeMath);
    const safeMath = await SafeMath.deployed();
    const safeMathAddress = safeMath.address;

    //Time Lock
    await deployer.deploy(Timelock, testAddress, daysDelay);
    const timelock = await Timelock.deployed();
    const timelockAddress = timelock.address;

    //Gov Alpha
    await deployer.deploy(GovernorAlpha, timelockAddress, metaTokenAddress, testAddress);
    const governorAlpha = await GovernorAlpha.deployed();
    const governorAlphaAddress = governorAlpha.address;

       
    //console.log("ERROR DECODER ADDRESS: " + errorDecoderAddress);
    //console.log("SAFE MATH ADDRESS: " + safeMathAddress);
    console.log("META TOKEN ADDRESS: " + metaTokenAddress);
    console.log("FAUCET ADDRESS: " + faucetAddress);
    console.log("TIMELOCK ADDRESS: " + timelockAddress)
    console.log("GOV ALPHA ADDRESS: " + governorAlphaAddress)
};

