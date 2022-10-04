import { useContext } from "react";
import { SudokuContext } from "../../contexts/SudokuContext";
import { ChoiceButton, CloseButton, VisibleModal, WarningBox } from "./ModalStyles"

export default function ErrorNotifier({warning, setWarning}) {
    const { chosenCell, deselectCell } = useContext(SudokuContext);

    function dontCloseModal(event) {
        event.stopPropagation();
    }

    return (
        <VisibleModal
            css={chosenCell.horizontal}
            onClick={dontCloseModal}>
                <WarningBox>{warning}</WarningBox>
                <ChoiceButton type="button" onClick={() => setWarning('none')}>
                    try again
                </ChoiceButton>
                <CloseButton type="button" onClick={() => deselectCell()}>
                    cancel
                </CloseButton>
        </VisibleModal>
    )
}
