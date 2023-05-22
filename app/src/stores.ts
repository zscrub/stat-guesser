import { writable } from "svelte/store";
import type { Quarterback } from "./stats";

const arr: Array<Quarterback> = []
export const guesses = writable(arr);
