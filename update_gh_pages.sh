#!/usr/bin/env bash

cd $(dirname $0)

set -e

# #################################
# clean up
# #################################
echo " -> make directory for wasm-packed rust.js files to publish github-pages"
rm -rf docs/rust
mkdir -p docs/rust/pkg

# #################################
# copy
# #################################
echo " -> copying files"
cp -rf ./rust/pkg ./docs/rust

# #################################
# finish
# #################################
#
# package.json は js の中から import してるか一応確認した 大丈夫みたい
echo " -> rm un-necessary static files"
rm -rf docs/rust/pkg/.gitignore
rm -rf docs/rust/pkg/README.md
rm -rf docs/rust/pkg/package.json

echo " -> finish updating github pages. "