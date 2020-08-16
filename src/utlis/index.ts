import { MAX_COLLUMN, MAX_ROWS } from "../constatns/index";
import { CellValue, CellState, Cell } from "../types/index";

export const generateCells = (): Cell[][] => {
  const cells: Cell[][] = [];

  for (let row = 0; row < MAX_ROWS; row++) {
    cells.push([]);

    for (let col = 0; col < MAX_COLLUMN; col++) {
      cells[row].push({
        value: CellValue.none,
        state: CellState.open,
      });
    }
  }
  return cells;
};
