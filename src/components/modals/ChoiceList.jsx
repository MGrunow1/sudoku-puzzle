import { useContext } from "react";
import { SudokuContext } from "../../contexts/SudokuContext";
import { CloseButton, NumberButton, NumberChooser } from "./ModalStyles"

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
        <NumberChooser
            css={chosenCell.horizontal}
            onClick={dontCloseModal}>
                {optionList.map ((option, index) => (
                    <NumberButton key={index} onClick={() => chooseOption(option)}>
                        {option}
                    </NumberButton>
                ))}
                <NumberButton onClick={() => chooseOption(null)}>
                    empty
                </NumberButton>
                <CloseButton
                onClick={() => deselectCell()}>
                    cancel
                </CloseButton>
        </NumberChooser>
    )
}
