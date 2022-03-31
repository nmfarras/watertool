import { BrowserRouter, Routes, Route } from "react-router-dom";

// import logo from './logo.svg';
// import './App.css';

// import Dashboard from "./pages/Dashboard/Dashboard.container";
// import Login from "./pages/Login/Login.container";

import Header from "./components/Header/Header.component";
import LoginPopUp from "./components/HomeComponents/LoginPopUp/LoginPopUp.component";
import Home from "./pages/Home/Home.container";
import Trial from "./pages/Trial/Trial.container";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/login" element={<LoginPopUp />} />
        <Route path="/trial" element={<Trial />} />
        {/* <Route path="/transactions" element={<TransactionPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
