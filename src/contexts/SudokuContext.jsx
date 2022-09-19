import { createContext, useState } from "react";

const SudokuContext = createContext([]);

const SudokuProvider = (props) => {
    const [puzzleSolution, setPuzzleSolution] = useState([]);
    const [puzzleSize, setPuzzleSize] = useState({subrows: 0, subcols: 0});

    const resizeSudoku = (size) => {
        const {subrows, subcols} = size;
        // TODO change this to actually fill the array
        let newPuzzle = [];
        for(let value = 0; value<((subrows * subcols) * (subrows * subcols)); value++) {
            newPuzzle.push(value);
        }
        setPuzzleSolution(newPuzzle);
        setPuzzleSize(size);
    }
    
    return (
        <SudokuContext.Provider value={{puzzleSolution, puzzleSize, resizeSudoku }}>
            {props.children}
        </SudokuContext.Provider>
    )
}

export { SudokuContext, SudokuProvider };
