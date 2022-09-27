import { useContext } from "react";
import { SudokuContext } from "../contexts/SudokuContext";
import ShowGrid from "./grid/ShowGrid";
import SizeSelector from "./SizeSelector";
import { CenteredContainer } from "./MainStyles";

export default function Home() {
  const { puzzleCreated } = useContext(SudokuContext);

  return (
    <CenteredContainer>
      {puzzleCreated ? (
          <ShowGrid />
        ) : (
          <SizeSelector />
        )}
    </CenteredContainer>
  );
}
