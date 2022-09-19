import { SudokuProvider } from './contexts/SudokuContext'
import Home from './components/Home'; 
import './App.css'

function App() {
  return (
    <SudokuProvider>
      <div className="App">
        <Home />
      </div>
    </SudokuProvider>
  )
}

export default App
