import React, { useState } from 'react';

import ValueOption from './types';
import Square from './Square';

const TicTacToe = (): React.ReactElement => {
  const gridSize = 3;

  const [grid, setGrid] = useState<ValueOption[][]>(
    new Array(gridSize).fill(new Array(gridSize).fill(undefined)),
  );
  const [currentValue, setCurrentValue] = useState<ValueOption>(ValueOption.X);

  const hasWinner = (linePosition: number, columnPosition: number) => {
    let checkLines = 0;
    let checkColumns = 0;
    let checkDiagonal = 0;

    for (let i = 0; i < gridSize; i += 1) {
      const square = grid[linePosition][columnPosition];

      checkLines += grid[linePosition][i] === square ? 1 : 0;
      checkColumns += grid[i][columnPosition] === square ? 1 : 0;

      if (linePosition === columnPosition) {
        checkDiagonal += grid[i][i] === square ? 1 : 0;
      }
      if (linePosition + columnPosition === gridSize - 1) {
        checkDiagonal += grid[i][gridSize - i - 1] === square ? 1 : 0;
      }

      if (
        checkLines === gridSize ||
        checkColumns === gridSize ||
        checkDiagonal === gridSize
      ) {
        break;
      }
    }

    return (
      checkLines === gridSize ||
      checkColumns === gridSize ||
      checkDiagonal === gridSize
    );
  };

  const handleSquareClick = (linePosition: number, columnPosition: number) => {
    if (!grid[linePosition][columnPosition]) {
      // In short, grid[linePosition][columnPosition] = currentValue
      const line = [...grid[linePosition]];
      line[columnPosition] = currentValue;
      grid[linePosition] = line;

      setGrid(grid);
      setCurrentValue(
        currentValue === ValueOption.X ? ValueOption.O : ValueOption.X,
      );

      console.log(hasWinner(linePosition, columnPosition));
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gridSize}, 50px)`,
        }}
      >
        {grid.map((line, linePosition) =>
          line.map((square, columnPosition) => (
            <Square
              key={`${linePosition + columnPosition}`}
              value={square}
              onClick={() => handleSquareClick(linePosition, columnPosition)}
            />
          )),
        )}
      </div>
    </div>
  );
};

export default TicTacToe;
