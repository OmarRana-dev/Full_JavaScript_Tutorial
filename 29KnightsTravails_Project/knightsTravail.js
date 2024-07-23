// Example chessboard size (8x8)
const BOARD_SIZE = 8;

function generateMoves(row, col) {
  const moves = [];
  const deltas = [
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
  ];

  for (const [dr, dc] of deltas) {
    const newRow = row + dr;
    const newCol = col + dc;

    if (isValidSquare(newRow, newCol)) {
      moves.push([newRow, newCol]);
    }
  }

  return moves;
}

function isValidSquare(row, col) {
  return row >= 0 && row < BOARD_SIZE && col >= 0 && col < BOARD_SIZE;
}

function knightMoves(start, end) {
  const queue = [[start]];
  const visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    const path = queue.shift();
    const [row, col] = path[path.length - 1];

    if (row === end[0] && col === end[1]) {
      return path;
    }

    const moves = generateMoves(row, col);

    for (const move of moves) {
      if (!visited.has(move)) {
        
        const [row, col] = move;
        if (row === end[0] && col === end[1]) {
          return [...path, move];
        }

        queue.push([...path, move]);
        visited.add(move);
      }
    }
  }

  // If no path is found
  return null;
}

console.log(knightMoves([0, 0], [7, 7]));
// console.log(knightMoves([1, 2], [3, 3]));
