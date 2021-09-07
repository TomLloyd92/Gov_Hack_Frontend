pragma solidity ^0.5.16;

contract Number {
    uint256 public numberTest = 0;

    constructor() public {}

    function increaseNumberByAmmount(uint256 ammount) public {
        numberTest += ammount;
    }

    function increaseByOne() public {
        numberTest++;
    }

    function decreaseByOne() public {
        numberTest--;
    }

    function getNumber() public view returns (uint256) {
        return numberTest;
    }
}
