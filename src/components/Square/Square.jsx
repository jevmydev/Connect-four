export function Square({ index, squareTurn, updateBoard, isNotSelected }) {
    const squareClassName = `Board-square ${squareTurn} ${isNotSelected ? "not-selected" : ""} ${!updateBoard ? "not-events" : ""}`;

    const handleClick = () => {
        updateBoard(index);
    };

    return <div className={squareClassName} onClick={handleClick}></div>;
}

export default Square;
