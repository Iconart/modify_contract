
const hre = require("hardhat");

async function main() {

  const CONTRACT_ADDR = "0x56b924b2Ef60e7354119993179c07b7AfFAd43F4"
  const modify = await hre.ethers.getContractAt("Modify", CONTRACT_ADDR);

  await modify.modifyX(41);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
