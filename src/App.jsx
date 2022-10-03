import { SudokuProvider } from './contexts/SudokuContext'
import Home from './components/Home'; 
import './App.css'

function App() {
  return (
    <SudokuProvider>
      <h1>Sudoku Puzzle</h1>
      <div className="App">
        <Home />
      </div>
    </SudokuProvider>
  )
}

export default App
