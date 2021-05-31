/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext } from 'react';

export interface GameInfo {
  winnersPerMatch: PlayerOption[];
  scoreBoard: ScoreBoard;
  totalSeconds: number;
}
export type PlayerOption = 'P1' | 'P2' | 'tie';
export interface ScoreBoard {
  P1: number;
  P2: number;
  tie: number;
}

export type GameHistoryContextProps = {
  info: {
    winnersPerMatch: PlayerOption[];
    scoreBoard: ScoreBoard;
    totalSeconds: number;
  };
  setInfo: (gameInfo: GameInfo) => void;
  resetContext: () => void;
};

export const GameHistoryContext = createContext<GameHistoryContextProps>({
  info: {
    winnersPerMatch: [],
    scoreBoard: { P1: 0, P2: 0, tie: 0 },
    totalSeconds: 0,
  },
  setInfo: () => {},
  resetContext: () => {},
});

export const useGameHistory = (): GameHistoryContextProps => {
  return useContext<GameHistoryContextProps>(GameHistoryContext);
};
