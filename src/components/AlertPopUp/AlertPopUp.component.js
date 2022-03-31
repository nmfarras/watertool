import "./AlertPopUp.css";

import logo2X from "../../img/Header/pertamina-logo-1@2x.png";

const AlertPopUp = () => {

  return (
    <div className="popup">
      <span role="img" aria-label="allowed">
        ✅
      </span>{" "}
      Alphanumeric Characters
      <br />
      <span role="img" aria-label="not allowed">
        ⛔️
      </span>{" "}
      *
    </div>
  );
};

export default AlertPopUp;
