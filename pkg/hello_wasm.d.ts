/* tslint:disable */
/* eslint-disable */
/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
export function sums(a: number, b: number): number;
/**
* @param {number} a
* @returns {number}
*/
export function ext(a: number): number;
/**
* @param {string} name
*/
export function greet(name: string): void;
/**
* @param {number} a
* @returns {number}
*/
export function sample(a: number): number;
/**
*/
export class Mod {
  free(): void;
/**
* @param {number} a
* @returns {number}
*/
  static add(a: number): number;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly sums: (a: number, b: number) => number;
  readonly __wbg_mod_free: (a: number) => void;
  readonly mod_add: (a: number) => number;
  readonly ext: (a: number) => number;
  readonly greet: (a: number, b: number) => void;
  readonly sample: (a: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
