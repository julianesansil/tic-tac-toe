import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import ValueOption from './types';
import Square from './Square';

interface TicTacToeProps {
  gridSize: number;
  setIsPlaying: (isPlaying: boolean) => void;
}

export const Grid = styled.div<{ size: number }>`
  display: grid;
  grid-template-columns: repeat(${props => props.size}, 50px);
`;

const TicTacToe = (props: TicTacToeProps): React.ReactElement => {
  const { gridSize, setIsPlaying } = props;

  const [grid, setGrid] = useState<ValueOption[][]>([]);
  const [currentValue, setCurrentValue] = useState<ValueOption>(ValueOption.X);

  useEffect(() => {
    setGrid(new Array(gridSize).fill(new Array(gridSize).fill(undefined)));
  }, [gridSize]);

  const hasWinner = (rowPosition: number, columnPosition: number) => {
    const square = grid[rowPosition][columnPosition];
    let checkRows = 0;
    let checkColumns = 0;
    let checkDiagonal = 0;

    for (let i = 0; i < gridSize; i += 1) {
      checkRows += grid[rowPosition][i] === square ? 1 : 0;
      checkColumns += grid[i][columnPosition] === square ? 1 : 0;

      if (rowPosition === columnPosition) {
        checkDiagonal += grid[i][i] === square ? 1 : 0;
      }
      if (rowPosition + columnPosition === gridSize - 1) {
        checkDiagonal += grid[i][gridSize - i - 1] === square ? 1 : 0;
      }

      if (
        checkRows === gridSize ||
        checkColumns === gridSize ||
        checkDiagonal === gridSize
      ) {
        break;
      }
    }

    return (
      checkRows === gridSize ||
      checkColumns === gridSize ||
      checkDiagonal === gridSize
    );
  };

  const handleSquareClick = (rowPosition: number, columnPosition: number) => {
    setIsPlaying(true);

    if (!grid[rowPosition][columnPosition]) {
      // In short, grid[rowPosition][columnPosition] = currentValue
      const row = [...grid[rowPosition]];
      row[columnPosition] = currentValue;
      grid[rowPosition] = row;

      setGrid(grid);
      setCurrentValue(
        currentValue === ValueOption.X ? ValueOption.O : ValueOption.X,
      );

      console.log(hasWinner(rowPosition, columnPosition));
    }
  };

  return (
    <Grid size={gridSize}>
      {grid.map((row, rowPosition) =>
        row.map((square, columnPosition) => (
          <Square
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
