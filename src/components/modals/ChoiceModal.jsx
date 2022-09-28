import { useContext } from "react";
import { SudokuContext } from "../../contexts/SudokuContext";
import { ModalBackground, NumberButton, NumberChooser } from "./ModalStyles"

export default function ChoiceModal() {
    const { chosenCell, optionList } = useContext(SudokuContext);

    return (
        <ModalBackground top={chosenCell.moveTop}>
            <NumberChooser css={chosenCell.horizontal}>
        {optionList.map ((option, index) => (
            <NumberButton key={index}>
                {option}
            </NumberButton>
        ))}
        <NumberButton>empty</NumberButton>
        <NumberButton>cancel</NumberButton>
    </NumberChooser>
        </ModalBackground>
    )
}
