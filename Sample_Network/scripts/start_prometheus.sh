#!/usr/bin/env bash

shopt -s expand_aliases
source ~/.bashrc

cd ..
prometheus --config.file=prometheus.yml
