import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
// import axios from "axios";


// import TransactionForm from '../../components/TransactionForm/TransactionForm.component';

import "./Questionaire.css";

import Header from "../../components/Header/Header.component";
import LoginPopUp from "../../components/HomeComponents/LoginPopUp/LoginPopUp.component";

import photoIco from "../../img/Dashboard/ic-outline-photo-camera@2x.svg";
import signalIco from "../../img/Dashboard/bi-bar-chart-fill@2x.svg";
import facilityIco from "../../img/Dashboard/bxs-building-house@2x.svg";
import documentIco from "../../img/Dashboard/ant-design-folder-add-filled@2x.svg";
import dashboardIco from "../../img/Dashboard/ep-trend-charts@2x.svg";
import reportIco from "../../img/Dashboard/ant-design-plus-circle-filled@2x.svg";
import addIco from "../../img/Dashboard/ant-design-plus-circle-filled-1@2x.svg";
import uploadIco from "../../img/Dashboard/ant-design-plus-circle-filled-2@2x.svg";
import line4 from "../../img/Questionaire/line-4@1x.svg";

const Questionaire = () => {
  const [popUp, setPopUp] = useState(false);
  const { register, control, handleSubmit, reset } = useForm();
  const description = "<p>Default value</p>";
  const [data, setData] = useState("");

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
    <div class="container-center-horizontal">
      <div class="questionaire screen">
        <Header handleOnClick={() => setPopUp(true)} />
        {/* toolbar */}
        <div class="rectangle-90-ou9waa"></div>

        {/* navbar */}
        <div class="rectangle-91-ou9waa"></div>
        <div class="user-name-ou9waa roboto-normal-white-20px">User Name</div>
        <div class="component-4-ou9waa smart-layers-pointers">
          <div class="dashboard1-1AhYZM">
            <img class="bibar-chart-fill-1lW8x8" src={signalIco} />
            <div class="dashboard-button-1lW8x8 valign-text-middle small">
              &nbsp;&nbsp; Dashboard Fasilitas
            </div>
          </div>
          <div class="rectangle-93-1AhYZM"></div>
        </div>
        <div class="component-5-ou9waa smart-layers-pointers">
          <div class="dashboard1-Zr1rA5">
            <img class="bxsbuilding-house-QD6rna" src={facilityIco} />
            <div class="dashboard-button-QD6rna valign-text-middle small">
              &nbsp;&nbsp; Fasilitas
            </div>
          </div>
          <div class="rectangle-93-Zr1rA5"></div>
        </div>
        <div class="component-6-ou9waa smart-layers-pointers">
          <div class="dashboard1-sEFUTD">
            <img class="icon-folder-JKw1RR" src={documentIco} />
            <div class="dashboard-button-JKw1RR valign-text-middle small">
              &nbsp;&nbsp; Berkas Fasilitas
            </div>
          </div>
          <div class="rectangle-93-sEFUTD"></div>
        </div>
        <div class="component-7-ou9waa smart-layers-pointers">
          <div class="dashboard1-5x0xAz">
            <img class="eptrend-charts-3WQcyk" src={dashboardIco} />
            <div class="dashboard-button-3WQcyk valign-text-middle small">
              &nbsp;&nbsp; Dashboard Perusahaan
            </div>
          </div>
          <div class="rectangle-93-5x0xAz"></div>
        </div>
        <div class="rectangle-92-ou9waa"></div>
        <a href="javascript:ShowOverlay('popup-laporan', 'animate-appear');">
          <div class="btn-fc-ou9waa smart-layers-pointers">
            <img class="ant-designplus-circle-filled-3mqQ6K" src={reportIco} />
            <div class="tambah-fasilitas-3mqQ6K valign-text-middle small">
              Buat Laporan
            </div>
          </div>
        </a>
        <Link to="/questionaire">
          <div class="btn-fc-p77iMW smart-layers-pointers">
            <img class="icon-plus-qgjTxW" src={addIco} />
            <div class="tambah-fasilitas-qgjTxW valign-text-middle small">
              Tambah Fasilitas
            </div>
          </div>
        </Link>
        <div class="btn-fc-VqlxZK smart-layers-pointers">
          <img class="ant-designplus-circle-filled-gC1JMf" src={uploadIco} />
          <div class="tambah-fasilitas-gC1JMf valign-text-middle small">
            Upload Fasilitas
          </div>
        </div>
        <div class="group-117-ou9waa">
          <div class="ellipse-8-QxDT8z"></div>
          <img class="icoutline-photo-camera-QxDT8z" src={photoIco} />
        </div>

        {/* body */}
        <div class="tambah-fasilitas-oixBWC valign-text-middle roboto-extra-bold-science-blue-37px">
          Tambah Fasilitas
        </div>
        <div class="privasi-anda-penting-oixBWC roboto-normal-black-20px">
          Privasi Anda penting bagi kami. Tindakan pencegahan diterapkan untuk
          melindungi informasi Anda dari penyalahgunaan. Silakan merujuk ke
          KEBIJAKAN PRIVASI untuk detail tambahan.
        </div>
        <div class="tab-1-oixBWC">
          {/* Questionaire Tab */}
          <div class="tab-1-dLvC8E">
            <div class="rectangle-99-Bl43Rx"></div>
            <div class="informasi-fasilitas-Bl43Rx very-small">
              Informasi Fasilitas
            </div>
            <div class="border-Bl43Rx">
              <img class="top-56bxfl" src="img/top@2x.svg" />
              <img class="right-56bxfl" src="img/right@2x.svg" />
              <img class="left-56bxfl" src="img/right@2x.svg" />
            </div>
          </div>
          <div class="tab-2-dLvC8E">
            <div class="rectangle-99-APxv95"></div>
            <div class="detail-fasilitas-APxv95 very-small">
              Detail <br />
              Fasilitas
            </div>
            <div class="border-APxv95">
              <img class="top-4Pcx6f" src="img/top@2x.svg" />
              <img class="right-4Pcx6f" src="img/right@2x.svg" />
              <img class="left-4Pcx6f" src="img/right@2x.svg" />
            </div>
          </div>
          <div class="tab-3-dLvC8E">
            <div class="rectangle-99-9EG5m1"></div>
            <div class="informasi-bisnis-9EG5m1 very-small">
              Informasi <br />
              Bisnis
            </div>
            <div class="border-9EG5m1">
              <img class="top-xh8dJU" src="img/top@2x.svg" />
              <img class="right-xh8dJU" src="img/right@2x.svg" />
              <img class="left-xh8dJU" src="img/right@2x.svg" />
            </div>
          </div>
          <div class="tab-4-dLvC8E">
            <div class="rectangle-99-nIivLr"></div>
            <div class="regulasi-dan-reputasi-nIivLr very-small">
              Regulasi dan
              <br />
              Reputasi
            </div>
            <div class="border-nIivLr">
              <img class="top-jqk21g" src="img/top@2x.svg" />
              <img class="right-jqk21g" src="img/right@2x.svg" />
              <img class="left-jqk21g" src="img/right@2x.svg" />
            </div>
          </div>
          <div class="tab-5-dLvC8E">
            <div class="rectangle-99-m7kliH"></div>
            <div class="kualitas-air-m7kliH very-small">
              Kualitas
              <br />
              Air
            </div>
            <div class="border-m7kliH">
              <img class="top-IMmRd8" src="img/top@2x.svg" />
              <img class="right-IMmRd8" src="img/right@2x.svg" />
              <img class="left-IMmRd8" src="img/right@2x.svg" />
            </div>
          </div>
          <div class="tab-6-dLvC8E">
            <div class="rectangle-99-WH0YB6"></div>
            <div class="bahan-polusi-WH0YB6 very-small">
              Bahan
              <br />
              Polusi
            </div>
            <div class="border-WH0YB6">
              <img class="top-W2phlv" src="img/top@2x.svg" />
              <img class="right-W2phlv" src="img/right@2x.svg" />
              <img class="left-W2phlv" src="img/right@2x.svg" />
            </div>
          </div>

          {/* Questionaire's #1 Tab */}
          <div class="frame-23-dLvC8E">
            <div class="informasi-fasilitas-ewaalQ valign-text-middle">
              Informasi Fasilitas
            </div>

            <form
              onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
              style={{ position: 'relative', zIndex: '1', left: '300px', top: '15px'}}
            >
              <section>
                <label>Nama Fasilitas</label>
                <input
                  {...register("facilityName")}
                  placeholder="Nama Fasilitas"
                />
                <label>Provinsi</label>
                <input {...register("province")} placeholder="Provinsi" />
                <label>Kota</label>
                <input {...register("city")} placeholder="Kota" />
                <label>Klasifikasi Industri</label>
                <input {...register("industryClass")} placeholder="Klasifikasi Industri" />
                <label>Label Fasilitas</label>
                <input {...register("facilityLabel")} placeholder="Label Fasilitas" />
              </section>
              <section>
                
              </section>
              {/* <input type="Submit" /> */}
            </form>

            {/* <div class="input-ewaalQ">
              <div class="nama-fasilitas-Wzd0qj valign-text-middle roboto-semi-bold-science-blue-24px">
                Nama Fasilitas
              </div>
              <div class="frame-21-Wzd0qj border-1px-pink-swan"></div>
            </div>
            <div class="input-TMvQNa">
              <div class="propinsi-e9q1J3 valign-text-middle roboto-semi-bold-science-blue-24px">Propinsi</div>
              <div class="frame-21-e9q1J3 border-1px-pink-swan"></div>
            </div>
            <div class="input-xIQQKf">
              <div class="kota-XTmP2G valign-text-middle roboto-semi-bold-science-blue-24px">Kota</div>
              <div class="frame-21-XTmP2G border-1px-pink-swan"></div>
            </div>
            <div class="input-FP2fWq">
              <div class="klasifikasi-industri-Dqxr6B valign-text-middle roboto-semi-bold-science-blue-24px">
                Klasifikasi Industri
              </div>
              <div class="frame-21-Dqxr6B border-1px-pink-swan"></div>
            </div>
            <div class="input-Sv0jU3">
              <div class="label-fasilitas-JCb20u valign-text-middle roboto-semi-bold-science-blue-24px">
                Label Fasilitas
              </div>
              <div class="frame-21-JCb20u border-1px-pink-swan"></div>
            </div>
            <div class="input-yb9GXM">
              <div class="aktif-MFBlde valign-text-middle roboto-semi-bold-science-blue-24px">Aktif</div>
              <img class="component-9-MFBlde" src="img/component-9@2x.svg" />
            </div>
            <div class="input-Kg2ttx">
              <div class="uji-coba-YQiJRJ valign-text-middle roboto-semi-bold-science-blue-24px">Uji Coba</div>
              <img class="component-10-YQiJRJ" src="img/component-9@2x.svg" />
            </div>
            <div class="frame-21-ewaalQ border-1px-pink-swan"></div>
            <div class="frame-22-ewaalQ border-1px-pink-swan"></div>
            
            <div class="border-ewaalQ"><img class="top-diY0lL" src="img/top-5@1x.svg" /></div>
            <div class="btn-s-ewaalQ">
              <div class="rectangle-98-4y3xjd"></div>
              <div class="button-4y3xjd valign-text-middle inter-medium-white-16px">Tidak Jadi</div>
            </div> */}

            <img class="line-4-ewaalQ" src={line4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionaire;
