// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4 <0.9.0;

interface IPandaCallee {
    function pandaCall(address sender, uint amount0, uint amount1, bytes calldata data) external;
}
