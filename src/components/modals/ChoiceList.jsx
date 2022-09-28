import { useContext } from "react";
import { SudokuContext } from "../../contexts/SudokuContext";
import { CloseButton, NumberButton, NumberChooser } from "./ModalStyles"

export default function ChoiceList() {
    const { chosenCell, deselectCell, optionList } = useContext(SudokuContext);
    
    function dontCloseModal(event) {
        event.stopPropagation();
    }
    return (
        <NumberChooser
            css={chosenCell.horizontal}
            onClick={dontCloseModal}>
                {optionList.map ((option, index) => (
                    <NumberButton key={index}>
                        {option}
                    </NumberButton>
                ))}
                <NumberButton onClick={() => tryCellValue(null)}>
                    empty
                </NumberButton>
                <CloseButton
                onClick={() => deselectCell()}>
                    cancel
                </CloseButton>
        </NumberChooser>
    )
}
