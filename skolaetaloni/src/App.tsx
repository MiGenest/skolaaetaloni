import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './layout/NavBar'
import Home from './pages/home'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
