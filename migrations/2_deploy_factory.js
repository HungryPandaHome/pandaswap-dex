const PandaFactory = artifacts.require("PandaFactory");

module.exports = async function (deployer,_network,addresses) {
    return deployer.deploy(PandaFactory, addresses[0]);
};
