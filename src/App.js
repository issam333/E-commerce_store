import "./App.css";
import Shirt from "./pages/Shirt";
import HomePage from "./pages/HomePage";
import Shirts from "./pages/Shirts";
import Signup from "./pages/Signup";
import SingIn from "./pages/SingIn";
import { Route, Routes, Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/SingIn" element={<SingIn names={'issam'} />} />
        <Route path='/shirt' element={<Shirt/>} />
        <Route path='/shirts' element={<Shirts />} />
      </Routes>
    </div>
  );
}

export default App;
