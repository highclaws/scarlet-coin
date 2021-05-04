const path = require("path");
const HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = "frost toast island december combine recipe friend bring jungle skin cloth rate";
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: "8545",
      network_id: "*"
    },
    kovan: {
      provider: function() {
        return new HDWalletProvider(
          mnemonic,
          "https://kovan.infura.io/v3/cb7d6ba6aab64ca990473681321c4972"
        );
      },
      network_id: 4
    }
  },
  contracts_build_directory: path.join(__dirname, "../client/src/contracts")
};
