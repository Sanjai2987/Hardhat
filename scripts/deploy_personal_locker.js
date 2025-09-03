const { ethers } = require("hardhat");

async function main() {
  const initialMessage = process.env.PLOCKER_INIT_MESSAGE; // your full name
  const password = process.env.PLOCKER_PASSWORD; // secret, do not commit

  if (!initialMessage) throw new Error("Missing PLOCKER_INIT_MESSAGE in env");
  if (!password) throw new Error("Missing PLOCKER_PASSWORD in env");

  const PersonalLocker = await ethers.getContractFactory("PersonalLocker");
  const locker = await PersonalLocker.deploy(initialMessage, password);
  await locker.waitForDeployment();

  const addr = await locker.getAddress();
  console.log("PersonalLocker deployed at:", addr);

  const owner = await locker.owner();
  const current = await locker.readMessage();
  console.log("Owner:", owner);
  console.log("Initial message:", current);
  console.log("block_contr:", (await locker.block_contr()).toString());
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
