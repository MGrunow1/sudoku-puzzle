import { useContext, useEffect } from "react";
import { SudokuContext } from "../../contexts/SudokuContext";
import './grid.css'
import RepeatBigRows from "./RepeatBigRows";

export default function ShowGrid() {
    const { chosenCell, puzzleSize } = useContext(SudokuContext);

    return (
    <>
    <div className='Thickborder'>
        <RepeatBigRows rows={puzzleSize.subrows} cols={puzzleSize.subcols}/>
    </div>
    </>
    )
}
