import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import Menu from "./components/pages/Menu";
import Login from "./components/pages/Login";
import CheckOut from "./components/pages/CheckOut";
import Thank from "./components/pages/Thank";
import ReorderIcon from "@material-ui/icons/Reorder";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/sign-up" element={<Login />} />
          <Route path="/login" element={<SignUp />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/thank" element={<Thank />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
