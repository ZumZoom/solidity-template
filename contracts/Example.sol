// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;


contract Example {
    event Log(uint256 a);

    function func(uint256 a) public {
        emit Log(a);
    }
}
