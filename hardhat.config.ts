
import { config as dconfig } from 'dotenv'
import '@nomiclabs/hardhat-waffle'
import 'hardhat-deploy-ethers'
import 'hardhat-abi-exporter'
import 'hardhat-tracer'
import 'hardhat-deploy'

import { getEnvValSafe } from './src/utils'
import './tasks/send-bundles'


dconfig()
const SUAVE_PK = getEnvValSafe("SUAVE_PK");
const GOERLI_PK = getEnvValSafe("GOERLI_PK");
const SUAVE_RPC = getEnvValSafe("SUAVE_RPC");
const GOERLI_RPC = getEnvValSafe("GOERLI_RPC");


export default {
  solidity: "0.8.8",
  defaultNetwork: 'hardhat',
  namedAccounts: {
    deployer: {
      default: 0,
    }
  },
  networks: {
    hardhat: {
      chainId: 424242,
      forking: {
        url: SUAVE_RPC, 
      },
      accounts: {
        accountsBalance: "10000000000000000000000000", 
        count: 100
      }
    }, 
    suave: {
      chainId: 424242,
      gasPrice: 0,
      url: SUAVE_RPC,
      accounts: [ SUAVE_PK ]
    },
    goerli: {
      chainId: 5,
      url: GOERLI_RPC,
      accounts: [ GOERLI_PK ]
    }
  }
}
