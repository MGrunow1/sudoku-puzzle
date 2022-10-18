import { useContext } from "react";
import { SudokuContext } from "../../contexts/SudokuContext";
import { ChoiceButton, WinMessage, WinnerModal } from "./ModalStyles";

export default function WinNotifier() {
    const { resetPuzzle } = useContext(SudokuContext);
    return (
        <>
        <WinnerModal>
            <WinMessage>
                You Win!
            </WinMessage>
            <ChoiceButton onClick={() => resetPuzzle()}>
                Play a new puzzle
            </ChoiceButton>
        </WinnerModal>
        </>
    )
}
