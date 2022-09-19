import { useContext } from "react";
import { SudokuContext } from "../contexts/SudokuContext";
import ShowGrid from "./grid/ShowGrid";
import SizeSelector from "./SizeSelector";
import '../App.css'

export default function Home() {
  const { puzzleCreated } = useContext(SudokuContext);

  return (
    <div className="Home">
      {puzzleCreated ? (
          <ShowGrid />
        ) : (
          <SizeSelector />
        )}
    </div>
  );
}
