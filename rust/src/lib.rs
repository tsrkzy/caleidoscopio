extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

/* modキーワードでブロックを記載しない場合、同名のファイルを読み込む */
mod core;

/* crate::core::game_core モジュールを game_core としてローカルに持ち込む
 *
 * ※別にuseしなくても、クソ長モジュールパスを毎度書いてもいい
 *
 * 関数をuseする際、親モジュールをuseして module::used_function とするのはrustの慣例
 * こう書くことで、ローカルで宣言されていない事が自明
 *
 * 一方、構造体やenumの場合はフルパスを書くのが慣例
 */
use crate::core::game_core;

#[wasm_bindgen]
pub fn greet(_name: &str) {
    let g = game_core::Game { score: 8000 };
    g.init();
    let mut c = game_core::Clock { ticks: 0 };
    c.tick();
    c.show();
}
