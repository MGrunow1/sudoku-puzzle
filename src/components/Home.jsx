import { useContext } from "react";
import { SudokuContext } from "../contexts/SudokuContext";
import ShowGrid from "./grid/ShowGrid";
import '../App.css'

export default function Home() {
  const { resizeSudoku } = useContext(SudokuContext);
  resizeSudoku({subrows: 3, subcols: 4});
  return (
    <div className="Home">
      <ShowGrid />
    </div>
  );
}
