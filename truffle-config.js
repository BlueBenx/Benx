const HDWalletProvider = require("@truffle/hdwallet-provider");
const {PRIVATE_KEY, BSCSCANAPIKEY} = require('./env.json');
module.exports = {
  plugins: ['truffle-plugin-verify'],
  api_keys: {
    bscscan: BSCSCANAPIKEY
  },
  networks: {
    bsc_testnet: {
      provider: () => new HDWalletProvider(PRIVATE_KEY, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,
      timeoutBlocks: 200,
      confirmations: 5,
      production: true
    },
    bsc_main: {
      provider: () => new HDWalletProvider(PRIVATE_KEY, `https://bsc-dataseed1.defibit.io`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    loc_development_development: {
      network_id: "*",
      port: 8545,
      host: "127.0.0.1"
    },
    loc_ganache_development: {
      network_id: "5777",
      port: 7545,
      host: "192.168.100.16"
    }
  },
  mocha: {
    timeout: 100000
  },
  compilers: {
    solc: {
      version: "0.8.4",
      settings: {
        optimizer: {
          enabled: false,
          runs: 200
        },
        evmVersion: "byzantium"
      }
    }
  }
};
