import { program } from "commander";
import Web3, { PayableCallOptions } from "web3";
import TokenAbi from "./TokenAbi.json";

const CONTRACT_ADDRESS = "0x564Fcecb039e0AC88B864eB315CEeb169673EcaD";

const web3 = new Web3("http://localhost:8545");
const token = new web3.eth.Contract(TokenAbi as any, CONTRACT_ADDRESS);
const tokenOwner =
  "6a45d6d7d829365c0d09e60c8d2eea6d7952441d8c867db68ae82a403b013813";
web3.eth.accounts.wallet.add("0x" + tokenOwner);
const tokenOwnerAddress = web3.eth.accounts.wallet[0].address;

program.command("assetCode").action(async () => {
  const assetCode = await token.methods.symbol().call().catch(console.error);
  console.log(assetCode);
});

program.command("name").action(async () => {
  const assetCode = await token.methods.name().call().catch(console.error);
  console.log(assetCode);
});

program.command("mint <amount>").action(async (amount: string) => {
  const options: PayableCallOptions = {
    from: tokenOwnerAddress,
    gas: "2164400",
    gasPrice: "0",
  };
  await token.methods
    .mint(tokenOwnerAddress, toWei(amount))
    .send(options)
    .catch(console.error);
});

program.command("balance").action(async () => {
  const balance = await token.methods
    .balanceOf(tokenOwnerAddress)
    .call()
    .catch(console.error);
  console.log(toEther(balance ? balance.toString() : "0"));
});

const toWei = (amount: string) => web3.utils.toWei(amount, "ether");

const toEther = (amount: string) => web3.utils.fromWei(amount, "ether");

program.parse();
