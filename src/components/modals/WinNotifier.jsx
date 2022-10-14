import { ChoiceButton, WinMessage, WinnerModal } from "./ModalStyles";

export default function WinNotifier() {
    return (
        <>
        <WinnerModal>
            <WinMessage>
                You Win!
            </WinMessage>
            <ChoiceButton>
                Play a new puzzle
            </ChoiceButton>
        </WinnerModal>
        </>
    )
}
