import { readable, writable, type Writable } from "svelte/store";
import type { Quarterback } from "./stats";

const arr: Array<Quarterback> = []
export const guesses = writable(arr);
export const max_guesses = 5
export const solution: Writable<Quarterback> = writable()
