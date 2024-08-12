import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const config: HardhatUserConfig = {
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      accounts: [
        "6a45d6d7d829365c0d09e60c8d2eea6d7952441d8c867db68ae82a403b013813",
      ],
      gasPrice: 0,
      gas: "auto",
    },
  },
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
};

export default config;
