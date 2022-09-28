import { useContext } from "react";
import { SudokuContext } from "../../contexts/SudokuContext";
import { CloseButton, ModalBackground, NumberButton, NumberChooser } from "./ModalStyles"

export default function ChoiceModal() {
    const { chosenCell, deselectCell, optionList } = useContext(SudokuContext);
    
    function dontCloseModal(event) {
        event.stopPropagation();
    }

    return (
        <ModalBackground
        top={chosenCell.moveTop}
        onClick={() => deselectCell()}>
            <NumberChooser css={chosenCell.horizontal}
            onClick={dontCloseModal}
            >
                {optionList.map ((option, index) => (
                    <NumberButton key={index}>
                        {option}
                </NumberButton>
                ))}
                <NumberButton>empty</NumberButton>
                <CloseButton
                onClick={() => deselectCell()}>
                    cancel
                </CloseButton>
            </NumberChooser>
        </ModalBackground>
    )
}
