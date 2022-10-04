import { useContext } from "react";
import { SudokuContext } from "../contexts/SudokuContext";
import { ButtonContainer, ButtonHiddenOnMedium, ButtonHiddenOnSmall, ButtonHiddenOnVerySmall } from "./MainStyles";

export default function SizeSelector() {
    const { resizeSudoku } = useContext(SudokuContext);

    return (
        <div style={{display: 'block'}}>
            <h2>Choose size of puzzle:</h2>
            <ButtonContainer>
                <button type="button" onClick={() => resizeSudoku({subrows: 2, subcols: 3})}>
                    6 numbers
                </button>
                <button type="button" onClick={() => resizeSudoku({subrows: 2, subcols: 4})}>
                    8 numbers
                </button>
                <button type="button" onClick={() => resizeSudoku({subrows: 3, subcols: 3})}>
                    9 (standard)
                </button>
                <ButtonHiddenOnVerySmall type="button" onClick={() => resizeSudoku({subrows: 4, subcols: 3})}>
                    12 numbers
                </ButtonHiddenOnVerySmall>
                <ButtonHiddenOnSmall type="button" onClick={() => resizeSudoku({subrows: 3, subcols: 5})}>
                    15 numbers
                </ButtonHiddenOnSmall>
                <ButtonHiddenOnSmall type="button" onClick={() => resizeSudoku({subrows: 4, subcols: 4})}>
                    16 numbers
                </ButtonHiddenOnSmall>
                <ButtonHiddenOnMedium type="button" onClick={() => resizeSudoku({subrows: 4, subcols: 5})}>
                    20 numbers
                </ButtonHiddenOnMedium>
            </ButtonContainer>
        </div>
    )
}
