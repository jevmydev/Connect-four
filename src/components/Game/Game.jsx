import Square from "../Square/Square";
import Winner from "../Winner/Winner";
import { TURNS } from "./logic/contants";

import { useBoard } from "../../hooks/useBoard";

import "./game.scss";

export function Game() {
    const [turn, board, winner, resetGame, updateBoard] = useBoard();

    return (
        <section className="Main-game Game">
            <div className="Game-wrapper">
                <div className="Game-board Board">
                    {board.map((squareTurn, index) => (
                        <Square key={index} index={index} squareTurn={squareTurn} updateBoard={updateBoard} />
                    ))}
                </div>
                <div className="Game-turn Turn">
                    <div className="Turn-wrapper">
                        <h2 className="Turn-title">Turno de</h2>
                    </div>
                    <div className="Turn-wrapper">
                        <Square squareTurn={TURNS.red} isNotSelected={turn !== TURNS.red} />
                        <Square squareTurn={TURNS.yellow} isNotSelected={turn !== TURNS.yellow} />
                    </div>
                </div>
                {winner && <Winner winner={winner} resetGame={resetGame} />}
            </div>
        </section>
    );
}

export default Game;
