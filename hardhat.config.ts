import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-storage-layout";
import "hardhat-deploy";

dotenv.config();

const SHOULD_ENABLE_VIA_IR: Boolean = process.env.SHOULD_ENABLE_VIA_IR
  ? process.env.SHOULD_ENABLE_VIA_IR === "true"
  : true;

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.26",
    settings: {
      viaIR: SHOULD_ENABLE_VIA_IR,
      optimizer: {
        enabled: true,
        runs: 1000000,
        details: {
          yul: true,
        },
      },
    },
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
    },
  },
  docgen: {
    projectName: "Nexus",
    projectDescription: "Nexus - Biconomy Modular Smart Account - ERC-7579",
  },
};

export default config;
