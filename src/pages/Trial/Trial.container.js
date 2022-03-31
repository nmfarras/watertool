import { useEffect, useState } from "react";
import AlertPopUp from "../../components/AlertPopUp/AlertPopUp.component";
import LoginPopUp from "../../components/HomeComponents/LoginPopUp/LoginPopUp.component";

import "./Trial.css";

const Trial = () => {
  const [name, setName] = useState("");
  const [popUp, setPopUp] = useState(false);

  useEffect(() => {
    const handleWindowClick = () => setPopUp(false)
    if(popUp) {
      window.addEventListener('click', handleWindowClick);
    } else {
      window.removeEventListener('click', handleWindowClick);
    }
    return () => window.removeEventListener('click', handleWindowClick);
  }, [popUp, setPopUp]);

  const validate = (event) => {
    if (/\*/.test(name)) {
      event.preventDefault();
      setPopUp(true);
      return;
    }
    setPopUp(false);
  };

  return (
    <div className="wrapper">
      <div className="preview">
        <h2>Preview: {name}.js</h2>
      </div>
      <form>
        <label>
          <p>Name:</p>
          <input
            autoComplete="off"
            name="name"
            onBlur={() => setPopUp(false)}
            onChange={(event) => setName(event.target.value)}
            onFocus={() => setPopUp(true)}
          />
        </label>
        <div className="information-wrapper">
          <button
            className="information"
            onClick={() => setPopUp(true)}
            type="button"
          >
            more information
          </button>
          {popUp && (
            <LoginPopUp />
          )}
        </div>
        <div>
          <button onClick={validate}>Save</button>
        </div>
      </form>
    </div>
  );
};

export default Trial;
