#!/usr/bin/env bash

set -eu

cd $(dirname $0)/rust

############################
# set up
############################

# copy README.md to bundle
touch ../README.md
cp ../README.md ./

############################
# build
############################

echo 'wasm-pack build'

# @SEE https://github.com/rustwasm/wasm-pack/issues/790#issuecomment-583893485
#
#      --target bundler(default): build for webpack
#
#      --target web: build for dynamic import
#
# check ./rust/pkg/package.json
wasm-pack build --target web

############################
# clean up
############################

rm -rf ./README.md

# back to current directory
cd -