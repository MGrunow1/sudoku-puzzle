import { useContext } from "react";
import { SudokuContext } from "../../contexts/SudokuContext";
import { ThickBorder } from "./GridStyles";
import RepeatSmallRows from "./RepeatSmallRows";

export default function SubGrid({subGridNumber}) {
    const { puzzleSize } = useContext(SudokuContext);
    return (
    <>
    <ThickBorder>
        <RepeatSmallRows rows={puzzleSize.subrows} cols={puzzleSize.subcols} subGridNumber={subGridNumber} />
    </ThickBorder>
    </>
    )
}
