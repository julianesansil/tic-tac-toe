import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { PlayerOption, useGameHistory } from 'context/GameHistoryContext';
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
  const [winningMove, setWinningMove] =
    useState<{
      rowPosition: number | undefined;
      columnPosition: number | undefined;
      direction: 'row' | 'column' | 'diagonal1' | 'diagonal2' | undefined;
    }>();

  const counter = useRef<number>(0);

  const clearGame = () => {
    setGrid(new Array(gridSize).fill(new Array(gridSize).fill(undefined)));
    setCurrentValue(ValueOption.X);
    setWinningMove(undefined);
    counter.current = 0;
  };

  useEffect(() => {
    clearGame();
  }, [gridSize]);

  useEffect(() => {
    if (newGame) {
      clearGame();
    }
  }, [newGame]);

  const endMatch = (value: ValueOption | undefined) => {
    let winner: PlayerOption;
    let message = `Match ${
      gameHistoryContext.info.winnersPerMatch.length + 1
    }: `;

    if (value === ValueOption.X) {
      winner = 'P1';
      message += 'player 1 wins! ;)';
    } else if (value === ValueOption.O) {
      winner = 'P2';
      message += 'player 2 wins! ;)';
    } else {
      winner = 'tie';
      message += "it's a tie! :/";
    }
    setTimeout(() => {
      alert(message);
    }, 500);

    gameHistoryContext.setInfo({
      ...gameHistoryContext.info,
      winnersPerMatch: [...gameHistoryContext.info.winnersPerMatch, winner],
      scoreBoard: {
        ...gameHistoryContext.info.scoreBoard,
        [winner]: gameHistoryContext.info.scoreBoard[winner] + 1,
      },
    });
  };

  const calculateCurrentResult = (
    rowPosition: number,
    columnPosition: number,
  ) => {
    let matchOver = false;
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

      // Match won
      if (
        checkRows === gridSize ||
        checkColumns === gridSize ||
        checkDiagonal1 === gridSize ||
        checkDiagonal2 === gridSize
      ) {
        matchOver = true;

        const direction =
          (checkRows === gridSize && 'row') ||
          (checkColumns === gridSize && 'column') ||
          (checkDiagonal1 === gridSize && 'diagonal1') ||
          (checkDiagonal2 === gridSize && 'diagonal2') ||
          undefined;
        setWinningMove({ direction, rowPosition, columnPosition });

        setIsPlaying(false);
        endMatch(square);
        break;
      }
    }

    // Match tied
    if (!matchOver && counter.current === gridSize ** 2) {
      setIsPlaying(false);
      endMatch(undefined);
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

  const isSquareHighlighted = (rowPosition: number, columnPosition: number) => {
    if (!winningMove) {
      return false;
    }
    switch (winningMove?.direction) {
      case 'row':
        return rowPosition === winningMove.rowPosition;
      case 'column':
        return columnPosition === winningMove.columnPosition;
      case 'diagonal1':
        return rowPosition === columnPosition;
      case 'diagonal2':
        return (
          rowPosition + columnPosition ===
          (winningMove.rowPosition || 0) + (winningMove.columnPosition || 0)
        );
      default:
        return false;
    }
  };

  return (
    <Grid size={gridSize}>
      {grid.map((row, rowPosition) =>
        row.map((square, columnPosition) => (
          <Square
            key={`${rowPosition + columnPosition}`}
            value={square}
            isSquareHighlighted={isSquareHighlighted(
              rowPosition,
              columnPosition,
            )}
            disabled={!newGame}
            onClick={() => handleSquareClick(rowPosition, columnPosition)}
          />
        )),
      )}
    </Grid>
  );
};

export default TicTacToe;
