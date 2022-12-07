require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers")
require ("@nomiclabs/hardhat-etherscan");
require ("dotenv").config();

const { ALCHEMY_API_KEY, META_PRIVATE_KEY, API_ETHERSCAN_KEY } = process.env;

module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: ALCHEMY_API_KEY,
      accounts: [`0x${META_PRIVATE_KEY}`]
    },
  },
etherscan: {
     // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: API_ETHERSCAN_KEY
  }
};
