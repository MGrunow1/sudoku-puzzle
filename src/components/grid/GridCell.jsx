import { useContext } from "react";
import { SudokuContext } from "../../contexts/SudokuContext";
import './grid.css';

export default function GridCell({spaceNumber}) {
    const { cellType, userPuzzle } = useContext(SudokuContext);
    const value = userPuzzle[spaceNumber];
    const type = cellType[spaceNumber];
    return (
        <>
            {type === 'clue' ? (
            <button disabled className='Cell'>
                <div className='Clue'>
                    {value}
                </div>
            </button>
            ) : (
            <button className='Cell'>
                <div className='Guess'>
                    {value}
                </div>
            </button>
            )}
        </>
    )
}
