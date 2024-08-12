#!/usr/bin/env bash

shopt -s expand_aliases
source ~/.bashrc

cd ../Node-1
besu --data-path=data public-key export-address --to=data/node1Address
