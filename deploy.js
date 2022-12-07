const { ethers } = require("hardhat");

async function main() {
  const MyNFT = await ethers.getContractFactory("MyNFT")

  const myNFT = await MyNFT.deploy()
  await myNFT.deployed()

  console.log("Contract deployed to address:", myNFT.address)
}

main ().catch((error) => {
  console.error(error);
  process.exitCode = 1
})