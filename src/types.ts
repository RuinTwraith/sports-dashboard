export interface Player {
  /** Name of the Player */
  name: string;
  /** Age of the Player */
  age: number | string;
  /** Index of the Player in the Array */
  playerIndex: number;
  /** Team of the Player */
  team_name: string;
  /** Game of the Player */
  game: string;
}

export interface Team {
  /** Name of the Team */
  team_name: string;
  /** Array containing Players */
  players: Array<Player>;
}

export interface Game {
  /** Name of the Game */
  game: string;
  /** Array containing Teams */
  teams: Array<Team>;
}
