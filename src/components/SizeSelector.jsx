import { useContext } from "react";
import { SudokuContext } from "../contexts/SudokuContext";
import '../App.css'

export default function SizeSelector() {
    const { resizeSudoku } = useContext(SudokuContext);

    return (
        <div style={{display: 'block'}}>
            <h2>Choose size of puzzle:</h2>
            <div className="ButtonContainer">
                <button onClick={() => resizeSudoku({subrows: 2, subcols: 3})}>
                    6 numbers
                </button>
                <button onClick={() => resizeSudoku({subrows: 2, subcols: 4})}>
                    8 numbers
                </button>
                <button onClick={() => resizeSudoku({subrows: 3, subcols: 3})}>
                    9 (standard)
                </button>
                <button
                className="HideOnVerySmall"
                onClick={() => resizeSudoku({subrows: 4, subcols: 3})}>
                    12 numbers
                </button>
                <button
                className="HideOnSmall"
                onClick={() => resizeSudoku({subrows: 3, subcols: 5})}>
                    15 numbers
                </button>
                <button
                className="HideOnSmall"
                onClick={() => resizeSudoku({subrows: 4, subcols: 4})}>
                    16 numbers
                </button>
                <button
                className="HideOnSmall"
                onClick={() => resizeSudoku({subrows: 4, subcols: 5})}>
                    20 numbers
                </button>
            </div>
        </div>
    )
}