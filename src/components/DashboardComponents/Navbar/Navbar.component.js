// import { Link } from "react-router-dom";

import "./Navbar.css";

import logo2X from "../../img/Header/pertamina-logo-1@2x.png";

const Navbar = (props) => {
  const { handleOnClick } = props;
  
  return (
    <div className="header">
      <div class="user-name-ou9waa roboto-normal-white-20px">User Name</div>
        <div class="component-4-ou9waa smart-layers-pointers">
          <div class="dashboard1-1AhYZM">
            <img class="bibar-chart-fill-1lW8x8" src={signalIco}/>
            <div class="dashboard-button-1lW8x8 valign-text-middle small">&nbsp;&nbsp; Dashboard Fasilitas</div>
          </div>
          <div class="rectangle-93-1AhYZM"></div>
        </div>
        <div class="component-5-ou9waa smart-layers-pointers">
          <div class="dashboard1-Zr1rA5">
            <img class="bxsbuilding-house-QD6rna" src={facilityIco} />
            <div class="dashboard-button-QD6rna valign-text-middle small">&nbsp;&nbsp; Fasilitas</div>
          </div>
          <div class="rectangle-93-Zr1rA5"></div>
        </div>
        <div class="component-6-ou9waa smart-layers-pointers">
          <div class="dashboard1-sEFUTD">
            <img class="icon-folder-JKw1RR" src={documentIco} />
            <div class="dashboard-button-JKw1RR valign-text-middle small">&nbsp;&nbsp; Berkas Fasilitas</div>
          </div>
          <div class="rectangle-93-sEFUTD"></div>
        </div>
        <div class="component-7-ou9waa smart-layers-pointers">
          <div class="dashboard1-5x0xAz">
            <img class="eptrend-charts-3WQcyk" src={dashboardIco} />
            <div class="dashboard-button-3WQcyk valign-text-middle small">&nbsp;&nbsp; Dashboard Perusahaan</div>
          </div>
          <div class="rectangle-93-5x0xAz"></div>
        </div>
        <div class="rectangle-92-ou9waa"></div>
    </div>
  );
};

export default Navbar;
