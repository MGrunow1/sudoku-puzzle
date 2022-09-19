import { useContext } from "react";
import { SudokuContext } from "../../contexts/SudokuContext";
import RepeatSmallRows from "./RepeatSmallRows";

export default function SubGrid({subGridNumber}) {
    const { puzzleSize } = useContext(SudokuContext);
    return (
    <>
    <div className="Thickborder">
        <RepeatSmallRows rows={puzzleSize.subrows} cols={puzzleSize.subcols} subGridNumber={subGridNumber} />
    </div>
    </>
    )
}
