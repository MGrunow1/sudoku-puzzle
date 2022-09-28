import { useContext, useState } from "react";
import { SudokuContext } from "../../contexts/SudokuContext";
import { ModalBackground } from "./ModalStyles"
import ChoiceList from "./ChoiceList";
import ErrorNotifier from "./ErrorNotifier";

export default function ChoiceModal() {
    const { chosenCell, deselectCell } = useContext(SudokuContext);
    const [choiceWarning, setChoiceWarning] = useState('none');
    
    return (
        <ModalBackground
        top={chosenCell.moveTop}
        onClick={() => deselectCell()}>
            {choiceWarning === 'none' ? (
                <ChoiceList setWarning={setChoiceWarning} />
            ) : (
                <ErrorNotifier
                    warning={choiceWarning}
                    setWarning={setChoiceWarning}
                />
            )}
        </ModalBackground>
    )
}
