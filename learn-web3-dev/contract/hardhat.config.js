require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.17",

  networks: {
    rinkeby: {
      url: process.env.RINKEBY_RPCNODE_URL,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY],

    },
    mumbai: {
      url: process.env.MUMBAI_RPCNODE_URL,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY],
    },
  },

  etherscan: {
    apiKey: 
    {
      rinkeby: process.env.ETHERSCAN_API_KEY,
      polygonMumbai: process.env.POLYGONSCAN_API_KEY,
    }
  }

};
