import { useContext } from "react";
import { SudokuContext } from "../contexts/SudokuContext";

export default function SizeSelector() {
    const { resizeSudoku } = useContext(SudokuContext);

    return (
        <>
        <h2>Choose size of puzzle:</h2>
        <button onClick={() => resizeSudoku({subrows: 2, subcols: 3})}>
            6
        </button>
        <button onClick={() => resizeSudoku({subrows: 2, subcols: 4})}>
            8
        </button>
        <button onClick={() => resizeSudoku({subrows: 3, subcols: 3})}>
            9 x 9 (standard)
        </button>
        <button onClick={() => resizeSudoku({subrows: 4, subcols: 3})}>
            12
        </button>
        <button onClick={() => resizeSudoku({subrows: 3, subcols: 5})}>
            15
        </button>
        <button onClick={() => resizeSudoku({subrows: 4, subcols: 5})}>
            16
        </button>
        <button onClick={() => resizeSudoku({subrows: 4, subcols: 5})}>
            20
        </button>
        <button onClick={()=>resizeSudoku({subrows: 4, subcols: 6})}>
            24
        </button>
        <button onClick={()=>resizeSudoku({subrows: 5, subcols: 5})}>
            25
        </button>
        </>
    )
}