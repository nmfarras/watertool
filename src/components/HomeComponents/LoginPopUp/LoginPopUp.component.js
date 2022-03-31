import { Link } from "react-router-dom";

import "./LoginPopUp.css";

import hPagePict from "../../../img/Home/LoginPopUp/foto-homepage-bawah-tentang-kami-1@1x.png";

const LoginPopUp = () => {
  return (
    <div>
      {/* <div id="overlay-login" className="overlay" style={{
          background: "rgba(0,0,0,.3)",
          minHeight: "4152px",
        }}>
        <div className="container-center-horizontal"> */}
        <div className="container-center-horizontal">
          <div id="overlay-login" className="login screen" style={{ position: 'relative', zIndex: '1', minHeight: '4152px'}}>
            <div className="login-b8DrbD">
              <div className="rectangle-89-nvMgcy"></div>
              <div className="login-nvMgcy valign-text-middle roboto-extra-bold-science-blue-37px">
                LOGIN
              </div>
              <div className="name-nvMgcy">
                <div className="input-e9mPcJ"></div>
                <div className="your-name-e9mPcJ valign-text-middle">
                  Nomor Ponsel atau Email
                </div>
              </div>
              <div className="name-WBBhZL">
                <div className="input-paxxB7"></div>
                <div className="your-name-paxxB7 valign-text-middle">
                  Kata Sandi
                </div>
              </div>
              <div className="text-nvMgcy">
                <div className="frame-8-crV5vx">
                  <div className="dont-haven-an-account-Pipgr5 valign-text-middle">
                    Don`t haven an account?
                  </div>
                </div>
                <div className="frame-10-crV5vx">
                  <div className="lupa-kata-sandi-2LE51o valign-text-middle">
                    Lupa kata sandi?
                  </div>
                </div>
                <div className="frame-9-crV5vx">
                  <div className="login-to-your-account-t8xBrg valign-text-middle">
                    Login to your account
                  </div>
                </div>
                <img className="line-2-crV5vx" src="" />
              </div>
              <div className="reset-kata-sandi-nvMgcy valign-text-middle">
                Reset kata sandi
              </div>
              <a href="javascript:history.back()">
                <img className="vector-nvMgcy" src="" />{" "}
              </a>
              <Link to="/dashboard">
                <div className="buttonxl-nvMgcy">
                  <div className="btn-B8dMoh">
                    <div className="btn-4FVqXD"></div>
                    <div className="send-4FVqXD valign-text-middle">MASUK</div>
                  </div>
                </div>
              </Link>
              <div className="frame-24-nvMgcy">
                <img
                  className="foto-homepage-bawah-tentang-kami-1-pDawc2"
                  src={hPagePict}
                />
              </div>
            </div>
          </div>
          </div>
        {/* </div>
      </div> */}
    </div>
  );
};

export default LoginPopUp;
