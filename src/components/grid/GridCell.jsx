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
            <CellButton type="button" disabled={true}>
                {value}
            </CellButton>
            ) : (
            <CellButton type="button" onClick={() => selectCell(spaceNumber)}>
                {value}
            </CellButton>
            )}
        </>
    )
}
