const Migrations = artifacts.require("Migrations");

module.exports = async function (deployer) {
  return deployer.deploy(Migrations);
};
