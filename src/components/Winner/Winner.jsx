import "./winner.scss";

export function Winner({ winner, resetGame }) {
    const winnerText = winner === false ? "Empate" : `Gano ${winner}`;

    return (
        <div className="Game-winner Winner">
            <div className="Winner-wrapper">
                <h2 className="Winner-title">{winnerText}</h2>
                <button className="Winner-button" onClick={resetGame}>
                    Empezar de nuevo
                </button>
            </div>
        </div>
    );
}

export default Winner;
