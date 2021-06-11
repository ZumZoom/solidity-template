require('@nomiclabs/hardhat-truffle5');
require('solidity-coverage');
require('hardhat-deploy');
require('hardhat-gas-reporter');

module.exports = {
    solidity: {
        version: '0.8.5',
        settings: {
            optimizer: {
                enabled: true,
                runs: 1000000,
            },
        },
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
    gasReporter: {
        enable: true,
        currency: 'USD',
    },
};
