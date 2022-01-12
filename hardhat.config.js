require('@nomiclabs/hardhat-etherscan');
require('@nomiclabs/hardhat-truffle5');
require('dotenv').config();
require('hardhat-deploy');
require('hardhat-gas-reporter');
require('solidity-coverage');

const networks = require('./hardhat.networks');

module.exports = {
    etherscan: {
        apiKey: {
            mainnet: process.env.MAINNET_ETHERSCAN_KEY,
            bsc: process.env.BSC_ETHERSCAN_KEY,
            kovan: process.env.KOVAN_ETHERSCAN_KEY,
            polygon: process.env.POLYGON_ETHERSCAN_KEY,
            optimisticEthereum: process.env.OPTIMISTIC_ETHERSCAN_KEY,
            arbitrumOne: process.env.ARBITRUM_ETHERSCAN_KEY,
            avalanche: process.env.AVALANCHE_ETHERSCAN_KEY,
            xdai: process.env.XDAI_ETHERSCAN_KEY,
            opera: process.env.FTM_ETHERSCAN_KEY,
        },
    },
    solidity: {
        settings: {
            optimizer: {
                enabled: true,
                runs: 1000000,
            },
        },
        version: '0.8.10',
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
    networks,
};
