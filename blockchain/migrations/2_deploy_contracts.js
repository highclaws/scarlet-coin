var Market = artifacts.require("../contracts/Market.sol");

module.exports = function(deployer) {
  deployer.deploy(Market);
};
