import { useEffect, useState } from "react";
import axios from "axios";

// import TransactionForm from '../../components/TransactionForm/TransactionForm.component';

import "./Dashboard.css";

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
import { Link } from "react-router-dom";

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
    <div class="container-center-horizontal">
      <div class="dashboard-1 screen">
        <Header handleOnClick={() => setPopUp(true)}/>
        {/* toolbar */}
        <div class="rectangle-90-ou9waa"></div>

        {/* navbar */}
        <div class="rectangle-91-ou9waa"></div>
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
        <a href="javascript:ShowOverlay('popup-laporan', 'animate-appear');">
          <div class="btn-fc-ou9waa smart-layers-pointers">
            <img class="ant-designplus-circle-filled-3mqQ6K" src={reportIco}/>
            <div class="tambah-fasilitas-3mqQ6K valign-text-middle small">Buat Laporan</div>
          </div></a
        ><Link to="/questionaire">
          <div class="btn-fc-p77iMW smart-layers-pointers">
            <img class="icon-plus-qgjTxW" src={addIco} />
            <div class="tambah-fasilitas-qgjTxW valign-text-middle small">Tambah Fasilitas</div>
          </div></Link
        >
        <div class="btn-fc-VqlxZK smart-layers-pointers">
          <img class="ant-designplus-circle-filled-gC1JMf" src={uploadIco} />
          <div class="tambah-fasilitas-gC1JMf valign-text-middle small">Upload Fasilitas</div>
        </div>
        <div class="group-117-ou9waa">
          <div class="ellipse-8-QxDT8z"></div>
          <img class="icoutline-photo-camera-QxDT8z" src={photoIco} />
        </div>

        {/* body */}
        <div class="dashboard-fasilitas-ou9waa valign-text-middle roboto-extra-bold-science-blue-37px">
          Dashboard Fasilitas
        </div>
        <div class="selamat-menggunakan-ou9waa valign-text-middle roboto-extra-bold-science-blue-37px">
          Selamat Menggunakan Aplikasi Water Tools Pertamina
        </div>
        <div class="frame-8-ou9waa"><div class="filter-by-YRA3fy valign-text-middle">Filter by :</div></div>
        <div class="step-1-identifikasi-ou9waa roboto-bold-black-20px">
          <span class="span0-OaQpO8 roboto-bold-black-20px">Step 1 : Identifikasi | </span
          ><span class="span1-OaQpO8 roboto-normal-black-20px"
            >Nilai risiko terkait air dengan menganalisis detail tingkat fasilitas di Dasbor Fasilitas ini dan
            menjelajahi Dasbor Perusahaan dari navigasi sebelah kiri. Dalam Dasbor Perusahaan, pahami profil risiko
            organisasi Anda di tab Analisis Risiko dan bandingkan kinerja berbagai situs dalam portofolio di tab
            Pembandingan.</span
          >
        </div>
        <div class="step-2-target-di-das-ou9waa roboto-bold-black-20px">
          <span class="span0-zSOYZR roboto-bold-black-20px">Step 2 : Target | </span
          ><span class="span1-zSOYZR roboto-normal-black-20px"
            >Di Dasbor Fasilitas ini, klik tombol Tetapkan Target untuk setiap fasilitas yang diberikan untuk mengetahui
            target penarikan air tahunan yang berkelanjutan yang akan diberikan pada penarikan air saat ini dan tekanan
            air dasar.</span
          >
        </div>
        <div class="step-3-implementasi-ou9waa roboto-bold-black-20px">
          <span class="span0-tSSi3K roboto-bold-black-20px">Step 3 : Implementasi | </span
          ><span class="span1-tSSi3K roboto-normal-black-20px"
            >Ikuti Penilaian Tindakan Air untuk menerima panduan praktis khusus industri untuk meningkatkan praktik
            pengelolaan, penggunaan, penetapan target, dan penatagunaan air. Setelah proyek perbaikan telah
            diidentifikasi, klik Kalkulator Investasi untuk setiap fasilitas yang diberikan di Dasbor Fasilitas ini
            untuk memprioritaskan inisiatif air.</span
          >
        </div>
        <div class="step-3-pemantauan-un-ou9waa roboto-bold-black-20px">
          <span class="span0-ox7Kzc roboto-bold-black-20px">Step 3 : Pemantauan | </span
          ><span class="span1-ox7Kzc roboto-normal-black-20px"
            >Untuk setiap fasilitas yang diberikan pada Dasbor Fasilitas ini, pantau penggunaan air dari waktu ke waktu
            dengan memasukkan data beberapa tahun dan mengklik Kinerja fasilitas.</span
          >
        </div>

        <div class="component-1-ou9waa">
          <div class="button-iaPgcS valign-text-middle inter-medium-white-16px">Tambah Fasilitas Baru</div>
        </div>
        <div class="component-8-ou9waa">
          <div class="button-wkI4Qg valign-text-middle inter-medium-white-16px">Upload File dalam Jumlah Banyak</div>
        </div>
        <div class="dd-ou9waa border-1px-mist-gray">
          <div class="dropdown-button-f4InvY valign-text-middle inter-medium-black-16px">Semua Berkas</div>
        </div>
        <div class="dd-p77iMW border-1px-mist-gray">
          <div class="dropdown-button-Wnmbef valign-text-middle inter-medium-black-16px">Semua Fasilitas</div>
        </div>
        <div class="dd-VqlxZK border-1px-mist-gray">
          <div class="dropdown-button-vRIp5z valign-text-middle inter-medium-black-16px">Semua Label</div>
        </div>
        <div class="dd-PNs4U7 border-1px-mist-gray">
          <div class="dropdown-button-z2BP4f valign-text-middle inter-medium-black-16px">Semua Sektor</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
