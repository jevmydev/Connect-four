import { useState } from "react";
import confetti from "canvas-confetti";

import { setStorage, getStorage } from "../components/Game/storage/storage";
import { getLastSquareInColumnEmpty, checkWinner, checkEndGame } from "../components/Game/logic/board";
import { TURNS, initBoard } from "../components/Game/logic/contants";

export function useBoard() {
    const [board, setBoard] = useState(() => JSON.parse(getStorage("boardConnectFour")) ?? initBoard);
    const [turn, setTurn] = useState(() => JSON.parse(getStorage("turnConnectFour")) ?? TURNS.red);
    const [winner, setWinner] = useState(null);

    const updateBoard = (index) => {
        const newTurn = turn === TURNS.red ? TURNS.yellow : TURNS.red;
        const newBoard = [...board];

        const lastSquareIndex = getLastSquareInColumnEmpty(index, newBoard);
        if (lastSquareIndex === undefined || winner) return;

        newBoard[lastSquareIndex] = turn;

        setBoard(newBoard);
        setTurn(newTurn);

        setStorage("boardConnectFour", newBoard);
        setStorage("turnConnectFour", newTurn);

        const newWinner = checkWinner(newBoard);

        if (newWinner) {
            setWinner(newWinner);
            confetti();
        } else if (checkEndGame(newBoard)) {
            setWinner(false);
        }
    };

    const resetGame = () => {
        setBoard(initBoard);
        setTurn(TURNS.red);
        setWinner(null);
    };

    return [turn, board, winner, resetGame, updateBoard];
}
