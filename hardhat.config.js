require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_URL = process.env.GORELI_URL;
const GORELI_API_KEY = process.env.GORELI_API_KEY;

const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: `${GOERLI_URL}/${GORELI_API_KEY}`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};