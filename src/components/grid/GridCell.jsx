import { useContext } from "react";
import { SudokuContext } from "../../contexts/SudokuContext";
import { CellButton } from "./GridStyles";

export default function GridCell({spaceNumber}) {
    const { cellType, userPuzzle, selectCell } = useContext(SudokuContext);
    const value = userPuzzle[spaceNumber];
    const type = cellType[spaceNumber];

    return (
        <>
            {type === 'clue' ? (
            <CellButton disabled={true}>
                {value}
            </CellButton>
            ) : (
            <CellButton onClick={() => selectCell(spaceNumber)}>
                {value}
            </CellButton>
            )}
        </>
    )
}
