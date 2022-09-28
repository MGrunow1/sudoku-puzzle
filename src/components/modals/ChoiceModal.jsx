import { useContext } from "react";
import { SudokuContext } from "../../contexts/SudokuContext";
import { ModalBackground } from "./ModalStyles"
import ChoiceList from "./ChoiceList";

export default function ChoiceModal() {
    const { chosenCell, deselectCell } = useContext(SudokuContext);
    
    return (
        <ModalBackground
        top={chosenCell.moveTop}
        onClick={() => deselectCell()}>
            <ChoiceList />
        </ModalBackground>
    )
}
