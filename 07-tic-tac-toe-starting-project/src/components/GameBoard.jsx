

export default function GameBoard({onSwitch,board}) {
   
    //this is old approach
    // const[gameBoard,setGameBoard]=useState(initialBoard);
    // function handleSquareClick(rowIndex,colIndex)
    // {
    //     setGameBoard((board)=>{
    //         const updatedBoard=board.map((cells)=>[...cells]);
    //         updatedBoard[rowIndex][colIndex]=symbol;
    //         return updatedBoard
    //     })
    //     onSwitch();
    // }
  
    return (
        <ol id="game-board">
            {board.map((row, rowIndex) =>
                <li key={rowIndex}>
                    <ol>{row.map((playerSymbol, colIndex) =>
                        <li key={colIndex}>
                            <button onClick={()=>onSwitch(rowIndex,colIndex)} disabled={playerSymbol!==null}>{playerSymbol}</button>
                        </li>)}
                    </ol>
                </li>)}
        </ol>
    )

}