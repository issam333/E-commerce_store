import "./App.css";

import BestsellerAndContactUs from "./pages/bestsellerAndContactUs";
import HomePage from "./pages/HomePage";
import LoginAndSingUp from "./pages/LoginAndSingUp";
import Login from "./components/Login";
import SingUp from "./components/SingUp";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";

function App() {
  return (
    <div>
      <HomePage />
      <BestsellerAndContactUs />
      <Router>
        <Route path="/Login" element={<Login />} />
        <Route path="/SingUp" element={<SingUp />} />
      </Router>
    </div>
  );
}

export default App;
