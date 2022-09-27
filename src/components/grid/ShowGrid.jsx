import { useContext, useEffect } from "react";
import { SudokuContext } from "../../contexts/SudokuContext";
import { ThickBorder } from "./GridStyles";
import RepeatBigRows from "./RepeatBigRows";

export default function ShowGrid() {
    const { chosenCell, puzzleSize } = useContext(SudokuContext);

    return (
    <>
    <ThickBorder>
        <RepeatBigRows rows={puzzleSize.subrows} cols={puzzleSize.subcols}/>
    </ThickBorder>
    </>
    )
}
