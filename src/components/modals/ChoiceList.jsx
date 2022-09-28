import { useContext } from "react";
import { SudokuContext } from "../../contexts/SudokuContext";
import { ChoiceButton, CloseButton, VisibleModal } from "./ModalStyles"

export default function ChoiceList({setWarning}) {
    const { chosenCell, deselectCell, optionList, tryCellValue } = useContext(SudokuContext);
    
    function dontCloseModal(event) {
        event.stopPropagation();
    }

    function chooseOption(choice) {
        const outcome = tryCellValue(choice);
        if(outcome === 'safe') {
            // successful, so close modal
            deselectCell()
        } else {
            setWarning(outcome);
        }
    }
    return (
        <VisibleModal
            css={chosenCell.horizontal}
            onClick={dontCloseModal}>
                {optionList.map ((option, index) => (
                    <ChoiceButton key={index} onClick={() => chooseOption(option)}>
                        {option}
                    </ChoiceButton>
                ))}
                <ChoiceButton onClick={() => chooseOption(null)}>
                    empty
                </ChoiceButton>
                <CloseButton
                onClick={() => deselectCell()}>
                    cancel
                </CloseButton>
        </VisibleModal>
    )
}
