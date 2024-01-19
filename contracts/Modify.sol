// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Modify {
    uint public x;

    function modifyX(uint _x) external {
        x = _x;
    }
}
