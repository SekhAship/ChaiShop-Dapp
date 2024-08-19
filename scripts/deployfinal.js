const hre = require("hardhat");


async function main() {
    const chai = await hre.ethers.getContractFactory("chai");
    const contract = await chai.deploy(); //instance of contract
  
    await contract.waitForDeployment();
    const contractAddress = await contract.getAddress();
    console.log("Address of contract:", contractAddress);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });