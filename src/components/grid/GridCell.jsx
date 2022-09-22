import { useContext } from "react";
import { SudokuContext } from "../../contexts/SudokuContext";
import './grid.css';

export default function GridCell({spaceNumber}) {
    const { cellType, puzzleSolution } = useContext(SudokuContext);
    const value = puzzleSolution[spaceNumber];
    const type = cellType[spaceNumber];
    return (
        <div className='Cell'>
            {type === 'clue' ? (
            <>{value}</>
            ) : (
            <>
            {null}
            </>
            )}
        </div>
    )
}
