import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SingIn from "./pages/SingIn";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SingIn" element={<SingIn names={'issam'} />} />
      </Routes>
    </div>
  );
}

export default App;
