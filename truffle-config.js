const HDWalletProvider = require('truffle-hdwallet-provider')
const mnemonic = "strategy fan arch middle glass stove mask gym between beach letter fever";

module.exports = {
  networks: {
    develop: {
      accounts: 50
    },
    development: {
      provider: function () {
        return new HDWalletProvider(mnemonic, 'http://127.0.0.1:8545/', 0, 50)
      },
      network_id: '*'
    }
  },
  compilers: {
    solc: {
      version: '^0.4.24'
    }
  }
}
