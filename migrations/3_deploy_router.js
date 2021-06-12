const fs = require("fs");

const PandaRouter01 = artifacts.require("PandaRouter01");
const PandaRouter = artifacts.require("PandaRouter");
const WETH9 = artifacts.require("WETH9");
const PandaFactory = artifacts.require("PandaFactory");



let WETH;
module.exports = async function (deployer, _network, addresses) {
    const factory = await PandaFactory.deployed();
    switch (_network) {
        case "development":
            // deploy WETH9
            await deployer.deploy(WETH9);
            const weth9 = await WETH9.deployed();
            WETH = weth9.address;
        default:
            break;
    }
    await deployer.deploy(PandaRouter01, factory.address, WETH);
    const router01 = await PandaRouter01.deployed();
    await deployer.deploy(PandaRouter, factory.address, WETH);
    const router = await PandaRouter.deployed();
    
    fs.writeFileSync("deployments.json", JSON.stringify({
        router: router.address,
        router01: router01.address,
        weth: WETH,
    }));
    return deployer;
};
