#!/usr/bin/env bash

set -eu

cd $(dirname $0)

############################
# set up
############################

# copy README.md to bundle
cp -f ./README.md ./rust

############################
# build
############################

echo 'wasm-pack build'

# cargo-watch
#  @SEE https://crates.io/crates/cargo-watch
#
# wasm-build
#  @SEE https://github.com/rustwasm/wasm-pack/issues/790#issuecomment-583893485
#
#      --target bundler(default): build for webpack
#
#      --target web: build for dynamic import
#
# check ./rust/pkg/package.json
cargo watch \
 --workdir ./rust \
 --watch ./src \
 --shell "wasm-pack build --target web"