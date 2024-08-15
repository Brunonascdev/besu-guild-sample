# Introduction to Hyperledger Besu Guild

This repository serves as a comprehensive sample project for Hyperledger Besu, an Ethereum client designed to meet enterprise needs, offering both permissioned and public network functionalities.

## Repository Structure

The folder structure of this project is organized as follows:

```bash
Sample_Network/
├── Node-1
│   ├── data
├── Node-2
│   ├── data
└── Node-3
    ├── data
Token_Client/
├── index.ts
Token_Contract/
├── contracts
│   ├── Token.sol
├── scripts
│   ├── deploy_token.ts
README.md
```

### Folder Description

- `Sample_Network`: Contains a sample Hyperledger Besu network setup using the [Clique consensus protocol](https://besu.hyperledger.org/private-networks/tutorials/clique). The nodes in this folder are preconfigured to simulate a simple private network.
- `Token_Contract`: Houses the code for an [ERC-20 Smart Contract](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/), which is a standard for creating fungible tokens on the Ethereum blockchain. This folder also includes deployment scripts leveraging the Hardhat development environment.
- `Token_Client`: Contains a Node.js client that interacts with the deployed token contract using the [web3.js library](https://web3js.readthedocs.io/en/v1.10.0/). This client provides several commands to interact with the token contract, such as checking the token name, minting new tokens, and checking account balances.

## Setting Up the Besu Network

### Pre-requisites

Before you begin, ensure you have the following installed:

- [Hyperledger Besu](https://besu.hyperledger.org/private-networks/get-started/install/binary-distribution)
- [Prometheus (optional)](https://prometheus.io/download/)

The `Sample_Network` folder is preconfigured for local execution. To start the network, follow these steps:

1. Navigate to the scripts folder:

```bash
cd Sample_Network/scripts
```

2. Set execution permissions for the scripts:

```bash
chmod +x start_node1.sh && chmod +x start_node2.sh && chmod +x start_node3.sh
```

3. Start the first node:

```bash
./start_node1.sh
```

4. Open a new terminal and start the second node:

```bash
./start_node2.sh
```

5. Open another terminal and start the third node:

```bash
./start_node3.sh
```

### Monitoring the Network

To monitor the network using Prometheus, follow these steps:

1. Navigate to the scripts folder:

```bash
cd Sample_Network/scripts
```

2. Install prometheus:

```bash
brew install prometheus
```

3. Start Prometheus:

```bash
./start_prometheus.sh
```

4. Open a browser and navigate to `http://localhost:9090` to access the Prometheus dashboard. More infomation on setting up Prometheus can be found in the [Hyperledger Besu documentation](https://besu.hyperledger.org/development/public-networks/how-to/monitor/metrics#view-prometheus-graphical-interface).

To know more about the network setup, refer to the [Hyperledger Besu documentation](https://besu.hyperledger.org/private-networks/tutorials/clique).

## Deploying the Token Contract

### Pre-requisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en)

The `Token_Contract` folder is preconfigured for deploying the token contract. Please note that the Besu nodes must be running before deploying the contract.

**Optional: Customizing the Token**

If you wish to customize the token’s name and symbol, follow these steps:

1. Navigate to the contracts folder:

```bash
cd Token_Contract/contracts/
```

2. Open the Token.sol file and edit the contract constructor as needed. For example, to change the token name to “AnotherName” and the symbol to “ANTK”, update the following lines:

Before:

```solidity
    constructor(
        address initialOwner
    )
        ERC20("GuildToken", "GTK")
        Ownable(initialOwner)
        ERC20Permit("GuildToken")
    {}
```

After:

```solidity
    constructor(
        address initialOwner
    )
        ERC20("AnotherName", "ANTK")
        Ownable(initialOwner)
        ERC20Permit("AnotherName")
    {}
```

### Deploying the Contract

1. Navigate to the contract folder:

```bash
cd Token_Contract/
```

2. Install the necessary dependencies:

```bash
npm install
```

3. Deploy the contract:

```bash
npm run deploy
```

This will use the Hardhat library to deploy the contract to your running Besu network.

4. Copy the contract address from the output:

```bash
Token deployed
Token address
0x...
```

## Interacting with the Deployed Contract

### Pre-requisites

- [Node.js](https://nodejs.org/en)

Ensure that Node.js is installed, and the Besu network is running with the token contract already deployed.

To interact with the contract, follow these steps:

1. Navigate to the client folder:

```bash
cd Token_Client/
```

2. Install the necessary dependencies:

```bash
npm install
```

3. Update the contract address:

Open the `index.ts` file and update the `CONTRACT_ADDRESS` variable with the address of the deployed token contract:

```typescript
const contractAddress = "0x..."; // Update this with the deployed contract address
```

4. Verify the connection to the Besu network:

Run the following command to check if the client is communicating correctly with Besu:

```bash
npm run assetCode
```

If successful, this command should return the asset code defined in the contract. For example, if unchanged, it should return `GTK`.

### Available commands:

- Get the token name:

```bash
npm run name
```

- Mint a specified amount of tokens to the owner account:

```bash
npm run mint <amount>
```

- Check the owner account balance:

```bash
npm run balance
```

These commands allow you to interact with the deployed token contract, enabling token minting, querying balances, and more.

This README provides a detailed guide on setting up a Hyperledger Besu network, deploying an ERC-20 token contract, and interacting with it using Node.js. Follow the steps carefully to ensure a successful setup and deployment process.
