import { ethers } from "hardhat";

async function main() {
  const ContractFactory = await ethers.getContractFactory("Token");
  const [deployer] = await ethers.getSigners();

  const instance = await ContractFactory.deploy(deployer);
  await instance.waitForDeployment();

  console.log(`Contract deployed to ${await instance.getAddress()}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
