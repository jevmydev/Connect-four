import { COLUMNS, WINNER_STACK } from "./contants";

export const getLastSquareInColumnEmpty = (index, board) => {
    const columnClicked = COLUMNS.find((column) => column.includes(index));
    const LastSquareInColumnEmpty = columnClicked.findLast((columnIndex) => board[columnIndex] === "");

    return LastSquareInColumnEmpty;
};

export const checkEndGame = (board) => !board.includes("");

export const checkWinner = (board) => {
    for (const winner of WINNER_STACK) {
        const [a, b, c, d] = winner.map((win) => board[win]);
        if (a !== "" && a === b && a === c && a === d) return a;
    }
};
