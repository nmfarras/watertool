import { useEffect, useState } from "react";
import axios from "axios";

// import TransactionForm from '../../components/TransactionForm/TransactionForm.component';

import "./Dashboard.css";

import Header from "../../components/Header/Header.component";
import LoginPopUp from "../../components/HomeComponents/LoginPopUp/LoginPopUp.component";

import logo1X from "../../img/Home/pertamina-logo-watertools-01@1x.png";
import quoteR from "../../img/Home/ci-double-quotes-r@2x.svg";
import quoteL from "../../img/Home/ci-double-quotes-l@2x.svg";

const Dashboard = () => {
  const [popUp, setPopUp] = useState(false);

  useEffect(() => {
    const handleWindowClick = () => setPopUp(false);
    if (popUp) {
      window.addEventListener("click", handleWindowClick);
    } else {
      window.removeEventListener("click", handleWindowClick);
    }
    return () => window.removeEventListener("click", handleWindowClick);
  }, [popUp, setPopUp]);

  return (
    <div className="container-center-horizontal">
      
    </div>
  );
};

export default Dashboard;
