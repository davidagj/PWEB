import './App.css'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from "../src/pages/Home"



const App = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>


    </BrowserRouter>
  )

export default App

