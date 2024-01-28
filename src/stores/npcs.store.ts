import { map } from "nanostores";
import npcs from "../data/npcs.json";

// We need to store an array with  the index of the npc as a key and the number of events that that NPC has available (Not visited) 
// 

export const npcEventStore = map<
