// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ERC1155Sale is ERC1155, Ownable {
    uint256 public constant TOKEN_ID = 1;
    uint256 public constant PRICE = 0.01 ether; // Price in POL
    uint256 public constant MAX_SUPPLY = 1000;
    uint256 public totalMinted;

    constructor(address initialOwner) 
        ERC1155("ipfs://QmZAxjBXKxxyg33SXYAZC3h85C48SojWJUDyisQnMY9DDb/{id}.json") 
        Ownable(initialOwner) 
    {
        // Base URI for metadata
    }

    function buyWithPOL(uint256 amount) external payable {
        require(totalMinted + amount <= MAX_SUPPLY, "Exceeds max supply");
        require(msg.value >= PRICE * amount, "Insufficient POL sent");
        require(amount > 0, "Amount must be greater than 0");

        _mint(msg.sender, TOKEN_ID, amount, "");
        totalMinted += amount;

        // Refund excess POL
        if (msg.value > PRICE * amount) {
            payable(msg.sender).transfer(msg.value - PRICE * amount);
        }
    }

    function mintForFiat(address recipient, uint256 amount) external onlyOwner {
        require(totalMinted + amount <= MAX_SUPPLY, "Exceeds max supply");
        require(amount > 0, "Amount must be greater than 0");

        _mint(recipient, TOKEN_ID, amount, "");
        totalMinted += amount;
    }

    function withdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    // Optional: Add setURI to update metadata URI later
    function setURI(string memory newuri) external onlyOwner {
        _setURI(newuri);
    }
}