import { atom } from "nanostores";
import type { NPC } from "../types";

// Initialize the store with an empty array or your default value
export const npcsStore = atom<NPC[]>([]);

// Add any additional store-related functions here
