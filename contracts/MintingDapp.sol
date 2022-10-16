// SPDX-License-Identifier: MIT

// 1. Pragma
pragma solidity ^0.8.9;
// 2. Imports

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**@title A NFT Colection Minting Contract
 * @author Sisco999
 * @notice This contract is to make a NFT minting website
 */

contract MintingDapp is ERC721Enumerable, Ownable {
     // Type Declarations

     using Strings for uint256;

     // State variables
     string i_baseURI;
     string private i_baseExtension = ".json";
     uint256 public s_cost = 30000000000000000;
     uint256 public i_maxSupply = 16333;
     uint256 private s_maxMintAmount = 222;

     constructor(string memory _initBaseURI) ERC721("NFT_2XRobot", "2XR") {
          setBaseURI(_initBaseURI);
     }

     // internal
     function _baseURI() internal view virtual override returns (string memory) {
          return i_baseURI;
     }

     // public
     function mint(uint256 _mintAmount) public payable {
          uint256 s_supply = totalSupply();
          require(_mintAmount <= s_maxMintAmount);
          require((s_supply + _mintAmount <= i_maxSupply), "Everythings as been minted! Sorry");

          if (msg.sender != owner()) {
               require(msg.value >= s_cost * _mintAmount, "You need to spend more money");
          }

          for (uint256 i = 1; i <= _mintAmount; i++) {
               _safeMint(msg.sender, s_supply + i);
          }
     }

     function walletOfOwner(address _owner) internal view returns (uint256[] memory) {
          uint256 ownerTokenCount = balanceOf(_owner);
          uint256[] memory tokenIds = new uint256[](ownerTokenCount);
          for (uint256 i; i < ownerTokenCount; i++) {
               tokenIds[i] = tokenOfOwnerByIndex(_owner, i);
          }
          return tokenIds;
     }

     function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
          require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

          string memory s_currentBaseURI = _baseURI();
          return
               bytes(s_currentBaseURI).length > 0
                    ? string(
                         abi.encodePacked(s_currentBaseURI, tokenId.toString(), i_baseExtension)
                    )
                    : "";
     }

     function setCost(uint256 _newCost) public onlyOwner {
          s_cost = _newCost;
     }

     function setmaxMintAmount(uint256 _newmaxMintAmount) public onlyOwner {
          s_maxMintAmount = _newmaxMintAmount;
     }

     function setmaxSupply(uint256 _newmaxSupply) public onlyOwner {
          i_maxSupply = _newmaxSupply;
     }

     function setBaseURI(string memory _newBaseURI) public onlyOwner {
          i_baseURI = _newBaseURI;
     }

     function getContractBalance() public view onlyOwner returns (uint256) {
          return address(this).balance;
     }

     function withdraw() public payable onlyOwner {
          (bool os, ) = payable(owner()).call{value: address(this).balance}("");
          require(os);
     }

     function getcost() public view returns (uint256) {
        return s_cost;
    }
}
