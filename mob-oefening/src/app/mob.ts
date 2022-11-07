export interface IMob {
  name: string;
  picture: string;
  behavior: Behavior;
  healthPoints: number;
}

export enum Behavior {
  Passive = 'passive',
  Neutral = 'neutral',
  Hostile = 'hostile',
}
