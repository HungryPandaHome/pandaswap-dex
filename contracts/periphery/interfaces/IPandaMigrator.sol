// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4 <0.9.0;

interface IPandaMigrator {
    function migrate(address token, uint amountTokenMin, uint amountETHMin, address to, uint deadline) external;
}
