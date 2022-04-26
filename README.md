# caleidoscopio

[try here](https://tsrkzy.github.io/caleidoscopio/)

## clone

```bash
gh repo clone tsrkzy/caleidoscopio
```

## rustup

GOTO [rust-lang/get-started](https://www.rust-lang.org/ja/learn/get-started)

```bash
rustup --version
#=> rustup 1.24.3 (ce5817a94 2021-05-31)

cargo --version
#=> cargo 1.60.0 (d1fd9fe2c 2022-03-01)
```

## install build-tool

```bash
cargo install wasm-pack
wasm-pack --version
#=> wasm-pack 0.10.2

cargo install cargo-watch
cargo-watch --version                                                                                                        +[main]
#=> cargo-watch 8.1.1
```

## build wasm

```bash
sh wasm_build.sh
```

## install vite

```bash
npm ci
$(npm bin)/vite --version
```

## start vite/server

```bash
npm run serve
```

## YOU!!!

```bash
echo $(git config user.name)' <'$(git config user.email)'>' | pbcopy
vi ./rust/Cargo.toml
```

```toml
[package]
name = "caleidoscopio"
version = "0.1.0"
edition = "2021"
authors = [
    "tsrkzy <tsrmix@gmail.com>"
    , "git_user_name <git@user_email.com>"
]
```

<img src="https://cultofthepartyparrot.com/parrots/hd/parrot.gif" class="lazy" data-src="/parrots/hd/parrot.gif" alt="Parrot" style="height: 28px;"> < update me

* .gitignore
* README.md