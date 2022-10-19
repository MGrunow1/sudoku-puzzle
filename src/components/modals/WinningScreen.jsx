import { useContext } from "react";
import { SudokuContext } from "../../contexts/SudokuContext";
import { ModalBackground } from "./ModalStyles"
import WinNotifier from "./WinNotifier";

export default function WinningScreen() {
    const { puzzleSize } = useContext(SudokuContext);
    const moveAmount = 50 + (puzzleSize.subcols * puzzleSize.subrows) * 17; 
    const moveTop = `${moveAmount}px`; 
    return (
        <>
        <ModalBackground
        top={moveTop}>
            <WinNotifier />
        </ModalBackground>
        </>
    )
}
