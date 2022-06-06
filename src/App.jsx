import { useState } from 'react'
import './App.css'
import CalculatorComponent from './components/CalculatorComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <CalculatorComponent/>
    </div>
  )
}

export default App
