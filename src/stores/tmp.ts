export type choice = {
  description: string;
  health: Array<number>;
  charisma: Array<number>;
  karma: Array<number>;
  affinity: Number;
};

export type event = {
  name: string;
  image_path: string;
  message: string;
  choices: Array<choice>;
};

export type npc = {
  name: string;
  description: string;
  image_path: string;
  initial_affinity: number;
  events: Array<event>;
};
