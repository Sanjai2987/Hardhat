// SPDX-License-Identifier: Apache-2.0
pragma solidity >=0.8.0;

contract PersonalLocker {
    address public owner;
    string private passwd;
    string private message;
    uint256 public block_contr;

    event MessageUpdated(string oldMessage, string newMessage);

    modifier onlyOwner() {
        require(msg.sender == owner, "not owner");
        _;
    }

    constructor(string memory initialMessage, string memory password) {
        owner = msg.sender;
        message = initialMessage;
        passwd = password;
        block_contr = block.number;
    }

    function updateMessage(string calldata newMessage, string calldata password) external onlyOwner {
        require(
            keccak256(abi.encodePacked(password)) == keccak256(abi.encodePacked(passwd)),
            "bad password"
        );
        string memory old = message;
        message = newMessage;
        emit MessageUpdated(old, newMessage);
    }

    function readMessage() external view returns (string memory) {
        return message;
    }

    function printPassword() external view onlyOwner returns (string memory) {
        return passwd;
    }

    receive() external payable {}
    fallback() external payable {}
}
