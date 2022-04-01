import { BrowserRouter, Routes, Route } from "react-router-dom";

// import logo from './logo.svg';
// import './App.css';

// import LoginPopUp from "./components/HomeComponents/LoginPopUp/LoginPopUp.component";
import Dashboard from "./pages/Dashboard/Dashboard.container";
import Home from "./pages/Home/Home.container";
import Questionaire from "./pages/Questionaire/Questionaire.container";
import Trial from "./pages/Trial/Trial.container";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/login" element={<LoginPopUp />} /> */}
        <Route path="/trial" element={<Trial />} />
        <Route path="/questionaire" element={<Questionaire />} />
      </Routes>
    </div>
  );
}

export default App;
