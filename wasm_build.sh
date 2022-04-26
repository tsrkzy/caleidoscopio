#!/usr/bin/env bash

usage_exit() {
  echo "Usage: $0 [-w (watch)] [-h (help)]" 1>&2
  exit 1
}

# abort on errors
set -eu

cd $(dirname $0)

FLAG_W=0
SEGMENT_W=""

############################
# parse arguments
############################

while getopts :wh OPT; do
  case ${OPT} in
  w) FLAG_W=1 ;;
  h) usage_exit ;;
  \?) usage_exit ;;
  esac
done

if [ ${FLAG_W} = 1 ]; then
  echo "WATCH MODE."
  SEGMENT_W="  --watch ./src"
else
  echo "BUILD MODE."
fi

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
WASM_PACK_CMD='wasm-pack build --target web'

if [ ${FLAG_W} = 1 ]; then
  # watchモードではcargo watchで起動
  cargo watch \
    --workdir ./rust \
    --watch ./src \
    --shell "${WASM_PACK_CMD}"
else
  cd ./rust
  ${WASM_PACK_CMD}
fi
