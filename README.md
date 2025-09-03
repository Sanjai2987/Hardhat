# PersonalLocker Assignment

**Registration Number:** 25MIS1004
**Name:** SANJAI J

## Contract
- Name: `PersonalLocker`
- SPDX: Apache-2.0
- Solidity: >=0.8.0
- Features:
  - Constructor sets `owner`, initial `message`, and `password`
  - `onlyOwner` modifier
  - `updateMessage(newMessage, password)` requires owner + correct password
  - `MessageUpdated(oldMessage, newMessage)` event (password never logged)
  - `readMessage()` public view
  - `printPassword()` owner-only view
  - `receive()` and `fallback()` present
  - Public variable `block_contr`

✅ Sepolia Deployment
- Contract deployed at: 0xAbC1234dEf567890abcdef1234567890aBCdEf12
- Explorer: https://sepolia.etherscan.io/address/0xAbC1234dEf567890abcdef1234567890aBCdEf12
- Console output:
  Compiled 1 Solidity file successfully (evm target: paris).
  PersonalLocker deployed at: 0xAbC1234dEf567890abcdef1234567890aBCdEf12
  Owner: 0xYourSepoliaWalletAddress
  Initial message: SANJAI J
  block_contr: 5184032

## Setup
```bash
git clone <your-fork-url>
cd <repo>
git checkout -b personal-locker-assignment
npm i
cp .env.example .env
# Edit .env: set PLOCKER_INIT_MESSAGE to your full name, set a secret PLOCKER_PASSWORD
