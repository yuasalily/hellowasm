use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn sample(a: i32) -> i32 {
    a + 1
}
