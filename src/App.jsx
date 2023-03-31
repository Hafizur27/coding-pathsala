import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import AllData from './components/AllData/AllData'
import Question from './components/Qusetion/Question'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Header></Header>
     <AllData></AllData>
     <Question></Question>
    </div>
  )
}

export default App
