pragma solidity ^0.5.16;

contract Faucet {
    address public admin;
    IERC20 public ERC20Adress;

    constructor(address tokenAddress) public {
        admin = msg.sender;
        ERC20Adress = IERC20(tokenAddress);
    }

    function setTokenAddress(address tokenAddress) public {
        require(admin == msg.sender);
        ERC20Adress = IERC20(tokenAddress);
    }

    function reciveFunds(address addressToRecive, uint256 ammount) public {
        assert(ammount <= 1000);
        ERC20Adress.transfer(addressToRecive, ammount);
    }
}

interface IERC20 {
    function transfer(address targetAddress, uint256 ammount) external;
}
