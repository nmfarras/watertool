import { Link } from "react-router-dom";

import "./Header.css";

import logo2X from "../../img/Header/pertamina-logo-1@2x.png";

const Header = (props) => {
  const { handleOnClick } = props;
  
  return (
    <div className="header">
      <div className="nav-top-bar-desktop-ou9waa">
        {/* <div className="logo-components-9o0X3L">
            <div className="logo-icon-iRxRPS">
              <img className="pertamina-logomark-CR3QMA" src={logo2X} />
              <div className="group-1-VQjUX4 invert_colors-HVQti8">
                <div className="watertool-fUP4ff valign-text-middle roboto-black-science-blue-12px"> WATERTOOLS </div>
              </div>
            </div>
            <div className="logo-text-iRxRPS"></div>
          </div> */}
        <div className="group-1-VQjUX4">
          <img className="pertamina-logo-1-fUP4ff" src={logo2X} />
          <div className="watertool-fUP4ff valign-text-middle roboto-black-science-blue-12px">
            WATERTOOLS
          </div>
        </div>

        <div className="frame-11-9o0X3L">
          <a href="home.html">
            <div className="nav-item-components-desktop-CgKoyE">
              <div className="nav-item-components-uvGtxX">
                <div className="nav-item-NdEGi3">
                  <div className="nav-item-content-nonNHi">
                    <div className="nav-item-content-gGe6Xw">
                      <div className="home-cyh5O5 inter-medium-storm-gray-16px">
                        Home
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <div className="nav-item-components-desktop-Y2yBlx">
            <div className="nav-item-components-QvI8II">
              <div className="nav-item-DRkt7e">
                <div className="nav-item-content-x6lKBE">
                  <div className="nav-item-content-FSakYK">
                    <div className="about-HHPteF inter-medium-storm-gray-16px">
                      About
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-item-components-desktop-M5s63M">
            <div className="nav-item-components-ykAW6M">
              <div className="nav-item-bQCNaL">
                <div className="nav-item-content-gIhBgb">
                  <div className="nav-item-content-5g71kA">
                    <div className="my-dashboard-XHlxF0 inter-medium-storm-gray-16px">
                      My Dashboard
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-buttons-wrapper-CEHf3x">
          <div 
            // href="javascript:ShowOverlay('login', 'animate-appear');"
          >
            <button onClick={handleOnClick} className="component-2-qYjYen smart-layers-pointers">
              <div  className="button-hW0NwT valign-text-middle inter-medium-white-16px">
                
                Sign In
             
              </div>
            </button>
          </div>
          <div className="button-blue-static-qYjYen border-1px-science-blue-2">
            <div className="button-6mbY8w valign-text-middle inter-medium-science-blue-16px">
              Sign Up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
