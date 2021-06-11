// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4 <0.9.0;

import '../PandaERC20.sol';

contract CoreERC20 is PandaERC20 {
    constructor(uint _totalSupply){
        _mint(msg.sender, _totalSupply);
    }
}
