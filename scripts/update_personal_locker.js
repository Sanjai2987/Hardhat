const { ethers } = require("hardhat");

async function main() {
  const address = process.env.PLOCKER_ADDRESS;
  const password = process.env.PLOCKER_PASSWORD;

  if (!address) throw new Error("Missing PLOCKER_ADDRESS in env");
  if (!password) throw new Error("Missing PLOCKER_PASSWORD in env");

  const locker = await ethers.getContractAt("PersonalLocker", address);

  console.log("Before update:", await locker.readMessage());
  const tx = await locker.updateMessage("Assignment Completed", password);
  console.log("Sent tx:", tx.hash);
  const receipt = await tx.wait();
  console.log("Mined in block:", receipt.blockNumber);

  console.log("After update:", await locker.readMessage());
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
