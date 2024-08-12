#!/usr/bin/env bash

shopt -s expand_aliases
source ~/.bashrc

cd ../Node-2
besu --data-path=data --genesis-file=../cliqueGenesis.json --bootnodes=enode://69f250d3e0feadaca43e6da1df73fc5f1830f0e922ca5d828ad91fb2528dd7881fd9b80e92d6e2cc75be9649cbd95a5f2818e8a513a64cb45ffb95d6f065bb1c@127.0.0.1:30303 --network-id 123 --p2p-port=30304 --rpc-http-enabled --rpc-http-api=ETH,NET,CLIQUE --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8546
