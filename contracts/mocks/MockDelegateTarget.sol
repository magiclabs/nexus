// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract MockDelegateTarget {
    function sendValue(address target, uint256 _value) public {
        target.call{ value: _value }("");
    }
}
