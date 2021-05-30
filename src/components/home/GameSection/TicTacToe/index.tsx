import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { PlayerOption, useGameHistory } from 'contexts/GameHistoryContext';
import ValueOption from './types';
import Square from './Square';

interface TicTacToeProps {
  newGame: boolean;
  gridSize: number;
  setIsPlaying: (isPlaying: boolean) => void;
}

export const Grid = styled.div<{ size: number }>`
  display: grid;
  grid-template-columns: repeat(${props => props.size}, 50px);
`;

const TicTacToe = (props: TicTacToeProps): React.ReactElement => {
  const gameHistoryContext = useGameHistory();
  const { newGame, gridSize, setIsPlaying } = props;

  const [grid, setGrid] = useState<ValueOption[][]>([]);
  const [currentValue, setCurrentValue] = useState<ValueOption>(ValueOption.X);

  const counter = useRef<number>(0);

  const clearGame = () => {
    counter.current = 0;
    setCurrentValue(ValueOption.X);
    setGrid(new Array(gridSize).fill(new Array(gridSize).fill(undefined)));
  };

  useEffect(() => {
    clearGame();
  }, [gridSize]);

  useEffect(() => {
    if (newGame) {
      clearGame();
    }
  }, [newGame]);

  const saveWinner = (value: ValueOption | undefined) => {
    let winner: PlayerOption = '-';
    if (value === ValueOption.X) {
      winner = 'P1';
    } else if (value === ValueOption.O) {
      winner = 'P2';
    }

    gameHistoryContext.setVictoriesHistory([
      ...gameHistoryContext.victoriesHistory,
      winner,
    ]);
  };

  const calculateCurrentResult = (
    rowPosition: number,
    columnPosition: number,
  ) => {
    const square = grid[rowPosition][columnPosition];
    let checkRows = 0;
    let checkColumns = 0;
    let checkDiagonal1 = 0;
    let checkDiagonal2 = 0;

    for (let i = 0; i < gridSize; i += 1) {
      checkRows += grid[rowPosition][i] === square ? 1 : 0;
      checkColumns += grid[i][columnPosition] === square ? 1 : 0;

      if (rowPosition === columnPosition) {
        checkDiagonal1 += grid[i][i] === square ? 1 : 0;
      }
      if (rowPosition + columnPosition === gridSize - 1) {
        checkDiagonal2 += grid[i][gridSize - i - 1] === square ? 1 : 0;
      }

      // Game won
      if (
        checkRows === gridSize ||
        checkColumns === gridSize ||
        checkDiagonal1 === gridSize ||
        checkDiagonal2 === gridSize
      ) {
        saveWinner(square);
        setIsPlaying(false);
        break;
      }
    }

    // Game tied
    if (counter.current === gridSize ** 2) {
      saveWinner(undefined);
      setIsPlaying(false);
    }
  };

  const handleSquareClick = (rowPosition: number, columnPosition: number) => {
    if (!grid[rowPosition][columnPosition]) {
      counter.current += 1;

      // In short, grid[rowPosition][columnPosition] = currentValue
      const row = [...grid[rowPosition]];
      row[columnPosition] = currentValue;
      grid[rowPosition] = row;

      setGrid(grid);
      setCurrentValue(
        currentValue === ValueOption.X ? ValueOption.O : ValueOption.X,
      );

      calculateCurrentResult(rowPosition, columnPosition);
    }
  };

  return (
    <Grid size={gridSize}>
      {grid.map((row, rowPosition) =>
        row.map((square, columnPosition) => (
          <Square
            disabled={!newGame}
            key={`${rowPosition + columnPosition}`}
            value={square}
            onClick={() => handleSquareClick(rowPosition, columnPosition)}
          />
        )),
      )}
    </Grid>
  );
};

export default TicTacToe;
