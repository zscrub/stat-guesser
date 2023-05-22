import { writable, type Writable } from "svelte/store";
import type { Quarterback } from "./stats";

export const max_guesses = 5
export const solution: Writable<Quarterback> = writable()
export const guesses: Writable<Array<Quarterback>> = writable([]);
export const qb_stats: Writable<Array<[string, string]>> = writable([])
