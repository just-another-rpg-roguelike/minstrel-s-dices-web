export const getNextEvents = (currentEvent: number): number[] => {
  return [currentEvent * 2, currentEvent * 2 + 1];
};

export function pickRandom<E>(arr: E[]): E {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function pickRandomAndIndex<E>(arr: E[]): { index: number, value: E } {
  const rindex = Math.floor(Math.random() * arr.length)
  return { index: rindex, value: arr[rindex] }
}
type choice = {
  "description": string,
  "healt": number[],
  "charisma": number[],
  "karma": number[],
  "affinity": number
}

type npc = {
  "name": string,
  "description": string,
  "image_path": string
  "initial_affinity": number,
  "events": {
    "image_path": string
    "message": string
    "choices": choice[]
  }[]
};

type eventRich = {
  "npcKey": string
  "npcDesciption": string
  "npcImage": string
  "eventImage": string
  "eventMessage": string
  "choices": choice[]
}

function npcToRichEvents(npc: npc): eventRich[] {
  const { 
    "name": npcKey,
    "description": npcDesciption,
    "image_path": npcImage,
  } = npc;
  return npc.events.map((event) => {
    const { "image_path": eventImage, "message": eventMessage, "choices": choices } = event;
    return {
      npcKey,
      npcDesciption,
      npcImage,
      eventImage,
      eventMessage,
      choices
    }
  })
}

function getNext(eventRich) {
  const [ index, event ] = 
}

const npcsToRichEvents = (npcs: npc[]): eventRich[] => {
  return npcs.map(npcToRichEvents).flat()
}
export { npcsToRichEvents };