#!/usr/bin/env bash

shopt -s expand_aliases
source ~/.bashrc

cd ../Node-1
besu --data-path=data --genesis-file=../cliqueGenesis.json --network-id 123 --rpc-http-enabled --rpc-http-api=ETH,NET,CLIQUE --host-allowlist="*" --rpc-http-cors-origins="all"
