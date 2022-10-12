import { useContext } from "react";
import { SudokuContext } from "../contexts/SudokuContext";
import ShowGrid from "./grid/ShowGrid";
import SizeSelector from "./SizeSelector";
import { CenteredContainer } from "./MainStyles";
import WinningScreen from "./modals/WinningScreen";

export default function Home() {
  const { puzzleCreated, puzzleCompleted } = useContext(SudokuContext);

  return (
    <CenteredContainer>
      {puzzleCreated ? (
          <>
          <ShowGrid />
          {puzzleCompleted && (
            <WinningScreen />
          )}
          </>
        ) : (
          <SizeSelector />
        )}
    </CenteredContainer>
  );
}
