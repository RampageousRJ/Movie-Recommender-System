import { useState } from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cards from './Components/Cards/Cards'
import Home from './Components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/movies' element={<Cards />} />
      </Routes>
    </Router>
  )
}

export default App
