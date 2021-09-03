const hre = require('hardhat');
const { getChainId, ethers } = hre;

module.exports = async ({ deployments, getNamedAccounts }) => {
    console.log('running deploy script');
    console.log('network id ', await getChainId());

    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    const exampleDeployment = await deploy('Example', {
        from: deployer,
    });

    console.log('Example deployed to:', exampleDeployment.address);

    const Example = await ethers.getContractFactory('Example');
    const example = Example.attach(exampleDeployment.address);

    const txn = await example.func('1234');
    await txn;

    if (await getChainId() !== '31337') {
        await hre.run('verify:verify', {
            address: exampleDeployment.address,
        });
    }
};

module.exports.skip = async () => true;
