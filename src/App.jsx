import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Booking_Summary from './Components/Booking_Summary'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/booking_summary" element={<Booking_Summary />} />
      </Routes>
    </>
  )
}

export default App
