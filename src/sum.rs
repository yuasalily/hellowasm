use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn sums(a: i32, b: i32) -> i32 {
    a + b
}

#[wasm_bindgen]
struct Mod {
    m: i32,
}

#[wasm_bindgen]
impl Mod {
    #[wasm_bindgen]
    pub fn add(a: i32) -> i32 {
        a + 10
    }
}

pub mod extract {
    use wasm_bindgen::prelude::*;
    #[wasm_bindgen]
    pub fn ext(a: i32) -> i32 {
        a - 1
    }
}
