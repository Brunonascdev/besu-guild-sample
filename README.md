# Introduction to Hyperledger Besu Guild

This repository was created as a sample of **Hyperledger Besu**.

The folder structure looks like this:

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

The `Sample_Network` folder contains the sample of the Hyperledger Besu network using [Clique](https://besu.hyperledger.org/private-networks/tutorials/clique).

The `Token_Contract` folder contains a [ERC-20 Smart Contract](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/) (standard Ethereum token) code, with a script to deploy this contract using the [hardhat library](https://hardhat.org/).

The `Token_Client` folder contains a Node.js client that interacts with the deployed Token contract using [web3.js library](https://web3js.readthedocs.io/en/v1.10.0/).

## Starting Besu network

### Pre-requisites

- [Hyperledger Besu](https://besu.hyperledger.org/private-networks/get-started/install/binary-distribution)

The `Sample_Network` folder is already prepared for running the network locally, so you only need to run the script files.

1. Go to the scripts folder

```bash
cd Sample_Network/scripts
```

2. Give the scripts the necessary permission

```bash
chmod +x start_node1.sh && chmod +x start_node2.sh && chmod +x start_node3.sh
```

3. Start the first node

```bash
./start_node1.sh
```

4. Go to another terminal and start the second node

```bash
./start_node2.sh
```

5. Go to another terminal and start the third node

```bash
./start_node3.sh
```

## Deploying the Token contract

### Pre-requisites

- [Node.js](https://nodejs.org/en)

The `Token_Contract` folder is already prepared for deploying the contract, so you only need to run the deploy script.

**Note: The Besu nodes needs to be up and running for deploying the contract.**

**Optional Step**

If you want to change the token name and asset code, go to the contracts folder:

```bash
cd Token_Contract/contracts/
```

Open the `Token.sol` file and edit the values on the contract constructor. sample:

Previously:

```solidity
    constructor(
        address initialOwner
    )
        ERC20("GuildToken", "GTK")
        Ownable(initialOwner)
        ERC20Permit("GuildToken")
    {}
```

After, where `AnotherName` is the desired token name and `ANTK` is the desired asset code:

```solidity
    constructor(
        address initialOwner
    )
        ERC20("AnotherName", "ANTK")
        Ownable(initialOwner)
        ERC20Permit("AnotherName")
    {}
```

For deploying the contract first go to the contract folder:

```bash
cd Token_Contract/
```

Install the libraries:

```bash
npm install
```

Then run the deploy command:

```bash
npm run deploy
```

This command will use the hardhat library for deploying the contract.

## Interacting with the contract

### Pre-requisites

- [Node.js](https://nodejs.org/en)

The `Token_Client` folder is already prepared for interacting with the contract, so you only need to run the commands on the terminal.

**Note: The Besu nodes needs to be up and running and the contract needs to be deployed for interacting with it.**

For interacting with the contract go to the contract client folder:

```bash
cd Token_Client/
```

Install the libraries:

```bash
npm install
```

Then run the `assetCode` command to check if the client is communicating with Besu correctly:

```bash
npm run assetCode
```

This command should return the assetCode used in the contract. If you did not change it, should return `GTK`.

### Available commands:

Get the asset name

```bash
npm run name
```

Mint a specified amount of the token to the owner account

```bash
npm run mint <amount>
```

Get the owner account balance

```bash
npm run balance
```
