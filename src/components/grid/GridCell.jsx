import { useContext } from "react";
import { SudokuContext } from "../../contexts/SudokuContext";
import './grid.css';

export default function GridCell({spaceNumber}) {
    const { puzzleSolution } = useContext(SudokuContext);
    const value = puzzleSolution[spaceNumber];
    return (
        <div className='Cell'>
            {value}
        </div>
    )
}
