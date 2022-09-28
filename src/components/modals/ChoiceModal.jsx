import { useContext } from "react";
import { SudokuContext } from "../../contexts/SudokuContext";
import { NumberButton, NumberChooser } from "./ModalStyles"

export default function ChoiceModal() {
    const { optionList } = useContext(SudokuContext);

    return (
    <NumberChooser>
        {optionList.map ((option, index) => (
            <NumberButton key={index}>
                {option}
            </NumberButton>
        ))}
        <NumberButton>empty</NumberButton>
        <NumberButton>cancel</NumberButton>
    </NumberChooser>
    )
}
