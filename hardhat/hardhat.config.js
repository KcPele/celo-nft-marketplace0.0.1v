
require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */

const PRIVATE_KEY = process.env.PRIVATE_KEY 
const RPC_URL = process.env.RPC_URL
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            // // If you want to do some forking, uncomment this
            // forking: {
            //   url: MAINNET_RPC_URL
            // }
            chainId: 31337,
        },
        localhost: {
            chainId: 31337,
        },
        alfajores: {
            url: RPC_URL,
            accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
            saveDeployments: true,
            chainId: 44787,
            blockConfirmations: 6,
        },
        
    },
    etherscan: {
        // npx hardhat verify --network <NETWORK> <CONTRACT_ADDRESS> <CONSTRUCTOR_PARAMETERS>
        apiKey: {
            
        },
    },
    gasReporter: {
        enabled: true,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: true,
        // coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    },
    contractSizer: {
        runOnCompile: false,
        only: ["Raffle"],
    },
    namedAccounts: {
        deployer: {
            default: 0, // here this will by default take the first account as deployer
            1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
        }
    },
    solidity: {
        compilers: [
            {
                version: "0.8.7",
                settings: {
                    optimizer: {
                      enabled: true,
                      runs: 110,
                    },
                  },
            },
            {
                version: "0.4.24",
                settings: {
                    optimizer: {
                      enabled: true,
                      runs: 1000,
                    },
                  },
            },
        ],
    },
    mocha: {
        timeout: 200000, // 200 seconds max for running tests
    },

};
