// App.jsx

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Nav from './Components/Nav';



function App() {


  return (
    <main className="h-full w-full">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </Router>
    </main>
  )
}

export default App
