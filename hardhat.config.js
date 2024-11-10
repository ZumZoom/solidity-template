require('@nomicfoundation/hardhat-chai-matchers');
require('@nomicfoundation/hardhat-ethers');
require('@nomicfoundation/hardhat-verify');
require('dotenv').config();
require('hardhat-dependency-compiler');
require('hardhat-deploy');
require('hardhat-gas-reporter');
require('hardhat-tracer');
require('solidity-coverage');
require('solidity-docgen');

const { oneInchTemplates } = require('@1inch/solidity-utils/docgen');
const { Networks, getNetwork } = require('@1inch/solidity-utils/hardhat-setup');

const { networks, etherscan } = new Networks().registerAll();

module.exports = {
    solidity: {
        compilers: [
            {
                version: '0.8.26',
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 1000000,
                    },
                    evmVersion: networks[getNetwork()]?.hardfork || 'shanghai',
                    viaIR: true,
                },
            },
        ],
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
    networks,
    etherscan,
    tracer: {
        enableAllOpcodes: true,
    },
    dependencyCompiler: {
        paths: [],
    },
    docgen: {
        outputDir: 'docs',
        templates: oneInchTemplates(),
        pages: 'files',
        exclude: ['mocks', 'tests'],
    },
};
