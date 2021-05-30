/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext } from 'react';

export type PlayerOption = 'P1' | 'P2' | '-';

export type GameHistoryContextProps = {
  victoriesHistory: PlayerOption[];
  setVictoriesHistory: (victoriesHistory: PlayerOption[]) => void;

  totalSeconds: number;
  setTotalSeconds: (totalSeconds: number) => void;
};

export const GameHistoryContext = createContext<GameHistoryContextProps>({
  victoriesHistory: [],
  setVictoriesHistory: () => {},
  totalSeconds: 0,
  setTotalSeconds: () => {},
});

export const useGameHistory = (): GameHistoryContextProps => {
  return useContext<GameHistoryContextProps>(GameHistoryContext);
};
