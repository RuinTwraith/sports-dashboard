import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Game, Player, Team } from '../types';

// Define the initial state using that type
const initialState: Array<Game> = [];

export const sportsSlice = createSlice({
  name: 'sports',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateInitialState: (state, action: PayloadAction<Array<Game>>) => {
      // adding blank player in each team
      // this ensures fast and easy addition of new player without separate logic
      return action.payload.map((sports: Game) => ({
        ...sports,
        teams: sports.teams.map((team: Team) => ({
          ...team,
          players: [{ name: '', age: '' }, ...team.players],
        })),
      }));
    },
    updatePlayerDetails: (state, action: PayloadAction<Player>) => {
      // updating the particular game and team using index
      const { name, age, playerIndex, team_name, game } = action.payload;
      const gameIndex = state.findIndex((sport: Game) => sport.game === game);
      const teamIndex = state[gameIndex].teams.findIndex(
        (team: Team) => team.team_name === team_name
      );

      state[gameIndex].teams[teamIndex].players[playerIndex] = {
        ...state[gameIndex].teams[teamIndex].players[playerIndex],
        name,
        age,
      };
    },
    addNewPlayerDetails: (
      state,
      action: PayloadAction<{
        team_name: string;
        playerIndex: number;
        game: string;
        age: number | string;
        name: string;
      }>
    ) => {
      // Adding new blank player at the beginning of players[]
      const { team_name, game } = action.payload;
      const gameIndex = state.findIndex((sport: Game) => sport.game === game);
      const teamIndex = state[gameIndex].teams.findIndex(
        (team: Team) => team.team_name === team_name
      );
      state[gameIndex].teams[teamIndex].players.unshift({ name: '', age: '' });
    },
  },
});

export const { updateInitialState, updatePlayerDetails, addNewPlayerDetails } =
  sportsSlice.actions;

export default sportsSlice.reducer;
