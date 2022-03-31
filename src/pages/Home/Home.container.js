import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// import TransactionForm from '../../components/TransactionForm/TransactionForm.component';

import "./Home.css";

import Header from "../../components/Header/Header.component";
import LoginPopUp from "../../components/HomeComponents/LoginPopUp/LoginPopUp.component";

import logo1X from "../../img/Home/pertamina-logo-watertools-01@1x.png";
import quoteR from "../../img/Home/ci-double-quotes-r@2x.svg";
import quoteL from "../../img/Home/ci-double-quotes-l@2x.svg";
import homeIco from "../../img/Home/group@2x.svg";
import medIco from "../../img/Home/medical-icon-social-services@2x.svg";
import octIco from "../../img/Home/octicon-law-16@2x.svg";
import employeeIco from "../../img/Home/clarity-employee-solid@2x.svg";
import fireIco from "../../img/Home/ic-round-local-fire-department@2x.svg";
import natureIco from "../../img/Home/el-leaf@2x.svg";
import communityIco from "../../img/Home/fa6-solid-people-group@2x.svg";

import arrowIco from "../../img/Home/vector-4@2x.svg";
import arrowIco1 from "../../img/Home/vector-5@2x.svg";
import arrowIco2 from "../../img/Home/vector-6@2x.svg";
import arrowIco3 from "../../img/Home/vector-8@2x.svg";
import arrowIco4 from "../../img/Home/vector-9@2x.svg";
import arrowIco5 from "../../img/Home/vector-10@2x.svg";
import arrowIco6 from "../../img/Home/vector-11@2x.svg";
import arrowIco7 from "../../img/Home/vector-12@2x.svg";
import arrowIco8 from "../../img/Home/vector-14@2x.svg";
import arrowIco9 from "../../img/Home/vector-15@2x.svg";
import arrowIco10 from "../../img/Home/vector-18@2x.svg";
import arrowIco11 from "../../img/Home/vector-19@2x.svg";
import arrowIco12 from "../../img/Home/vector-20@2x.svg";

const Home = () => {
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
      <div className="home screen">
        <Header handleOnClick={() => setPopUp(true)} />

        {popUp && <LoginPopUp />}

        <div className="rectangle-4-xl4bh6"></div>
        <div className="rectangle-5-xl4bh6"></div>
        <img
          className="pertamina-logo_watertools-01-xl4bh6"
          src={logo1X}
        />
        <div
        // href="javascript:ShowOverlay('login', 'animate-appear');"
        >
          <button onClick={() => setPopUp(true)} className="button-blue-static-xl4bh6 smart-layers-pointers">
            <div className="button-R0zxGu smart-layers-pointers valign-text-middle inter-medium-science-blue-16px">
              Gunakan Pertamina Water Tools Sekarang
            </div>
          </button>
        </div>
        <div className="pertamina-water-tools-xl4bh6 valign-text-middle">
          PERTAMINA WATER TOOLS
        </div>
        <div className="berkerja-demi-kemajuan-bangsa-xl4bh6 valign-text-middle">
          Berkerja Demi Kemajuan Bangsa
        </div>
        <div className="dengan-berkurangnya-xl4bh6 valign-text-middle">
          Dengan berkurangnya air bersih sementara penggunaan terus meningkat
          maka pengelolaan Sumber Daya Air dan resikonya merupakan poin penting
          bagi usaha bisnis terutama di sektor migas.
        </div>
        <div className="pengelolaan-sumber-daya-air-pertamina-xl4bh6 valign-text-middle">
          Pengelolaan Sumber Daya Air Pertamina
        </div>
        <div className="pengelolaan-sumber-daya-air-pertamina-efo9xP valign-text-middle">
          Pengelolaan Sumber Daya Air Pertamina
        </div>
        <div className="water-tools-risk-ass-xl4bh6 roboto-normal-white-20px">
          Water tools risk assessment yang berbasiskan web apps atau desktop
          apps yang dapat diakses secara offline, dengan output report dengan
          format ini dikembangkan oleh Pertamina dengan tujuan meningkatkan
          Sustainability Focus, Reducing Environmental Footprint, Pengelolaan
          Sumber daya Air dan Pengendalian Resiko
        </div>
        <img
          className="cidouble-quotes-r-xl4bh6"
          src={quoteR}
        />
        <img
          className="cidouble-quotes-l-xl4bh6"
          src={quoteL}
        />
        <div className="rectangle-6-xl4bh6"></div>
        <div className="accordions-xl4bh6">
          <div className="accordion-VHxCDW">
            <div className="frame-3-riPnLP">
              <img
                className="medical-iconsocial-services-vBpIho"
                src={medIco}
              />
              <div className="tanggung-jawab-sosial-perusahaan-vBpIho valign-text-middle">
                Tanggung Jawab Sosial Perusahaan
              </div>
              <div className="group-2-vBpIho">
                <div className="ellipse-1-5xIhqr"></div>
                <img className="vector-5xIhqr" src={arrowIco} />
              </div>
            </div>
            <div className="sebagai-perusahaan-e-riPnLP roboto-normal-white-20px">
              Sebagai perusahaan energi nasional, Pertamina berkomitmen untuk
              senantiasa memprioritaskan keseimbangan dan kelestarian alam,
              lingkungan dan masyarakat. Dengan menyejahterakan manusia, alam,
              dan lingkungan, maka Pertamina akan mampu mencapai pertumbuhan
              bisnis yang berkelanjutan.
            </div>
          </div>
          <div className="accordion-eepdpy">
            <div className="frame-3-cZLEQa">
              <img className="icon-home-UHLo98" src={homeIco} />
              <div className="tanggung-jawab-sosial-perusahaan-UHLo98 valign-text-middle roboto-extra-bold-science-blue-27px">
                Pertamina Village
              </div>
              <div className="group-2-UHLo98">
                <div className="ellipse-1-7NEYfP"></div>
                <img className="vector-7NEYfP" src={arrowIco1} />
              </div>
            </div>
          </div>
          <div className="accordion-Garo2g">
            <div className="frame-3-cFxnkl">
              <img
                className="clarityemployee-solid-CRlHs1"
                src={employeeIco}
              />
              <div className="tanggung-jawab-sosial-perusahaan-CRlHs1 valign-text-middle roboto-extra-bold-science-blue-27px">
                Employee Volunteerism
              </div>
              <div className="group-2-CRlHs1">
                <div className="ellipse-1-p6uLFO"></div>
                <img className="vector-p6uLFO" src={arrowIco2} />
              </div>
            </div>
          </div>
          <div className="accordion-ZgRstV">
            <div className="frame-3-qFPsF2">
              <img
                className="icround-local-fire-department-ye2cI4"
                src={fireIco}
              />
              <div className="tanggung-jawab-sosial-perusahaan-ye2cI4 valign-text-middle roboto-extra-bold-science-blue-27px">
                Disaster Management
              </div>
              <div className="group-2-ye2cI4">
                <div className="ellipse-1-3ArSxF"></div>
                <img className="vector-3ArSxF" src={arrowIco2} />
              </div>
            </div>
          </div>
        </div>
        <div className="study-case-xl4bh6 valign-text-middle roboto-extra-bold-science-blue-37px">
          STUDY CASE
        </div>
        <div className="masyarakat-xl4bh6 valign-text-middle roboto-extra-bold-cape-cod-37px">
          Masyarakat
        </div>
        <div className="lingkungan-xl4bh6 valign-text-middle roboto-extra-bold-cape-cod-37px">
          Lingkungan
        </div>
        <div className="kebijakan-xl4bh6 valign-text-middle roboto-extra-bold-cape-cod-37px">
          Kebijakan
        </div>
        <div className="kami-menghargai-komu-xl4bh6 roboto-semi-bold-cape-cod-26px">
          Kami menghargai komunitas, ruang lingkup sosial dan kemajuan bersama.
        </div>
        <div className="studi-kasus-pengguna-xl4bh6">
          Studi kasus penggunaan Pertamina Water Tools di EP Sukowati
        </div>
        <div className="pelestarian-alam-lin-xl4bh6 roboto-semi-bold-cape-cod-26px">
          Pelestarian Alam, Lingkungan hidup adalah komitmen Perusahaan
        </div>
        <div className="perusahaan-berkerja-xl4bh6 roboto-semi-bold-cape-cod-26px">
          Perusahaan berkerja dalam kebijakan yang adil dan jujur.
        </div>
        <div className="lorem-ipsum-dolor-si-xl4bh6 roboto-normal-black-20px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <br />
          <br />
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam.
        </div>
        <div className="button-blue-static-efo9xP smart-layers-pointers">
          <div className="button-m4ciLK valign-text-middle large">
            Baca Selengkapnya
          </div>
        </div>
        <div className="frame-15-xl4bh6">
          <div className="ellipse-3-cYEbUc"></div>
          <img className="elleaf-cYEbUc" src={natureIco} />
        </div>
        <div className="frame-14-xl4bh6">
          <div className="ellipse-2-dtydqj"></div>
          <img
            className="fa6-solidpeople-group-dtydqj"
            src={communityIco}
          />
        </div>
        <div className="frame-16-xl4bh6">
          <div className="ellipse-4-EsEkeX"></div>
          <img
            className="octiconlaw-16-EsEkeX"
            src={octIco}
          />
        </div>
        <div className="footer-xl4bh6">
          <div className="rectangle-82-peWZqm"></div>
          <div className="rectangle-86-peWZqm"></div>
          <div className="group-99-peWZqm">
            <div className="our-website-lLUsRq roboto-bold-white-20px">
              OUR WEBSITE
            </div>
            <div className="kebijakan-privasi-lLUsRq roboto-normal-white-15px">
              Kebijakan Privasi
            </div>
            <div className="waspada-penipuan-lLUsRq roboto-normal-white-15px">
              Waspada Penipuan
            </div>
          </div>
          <div className="copyright-pt-pertami-peWZqm roboto-normal-white-15px">
            Copyright PT Pertamina (Persero) 2022. All Rights Reserved
          </div>
          <div className="group-100-peWZqm">
            <div className="tools-eW6awX roboto-bold-white-20px">TOOLS</div>
            <div className="tko-eW6awX roboto-normal-white-15px">TKO</div>
            <div className="tki-eW6awX roboto-normal-white-15px">TKI</div>
            <div className="stk-eW6awX roboto-normal-white-15px">STK</div>
            <div className="dokumen-eW6awX roboto-normal-white-15px">
              Dokumen
            </div>
          </div>
          <div className="group-101-peWZqm">
            <div className="announcement-MxGxY1 roboto-bold-white-20px">
              ANNOUNCEMENT
            </div>
            <div className="pertamina-info-MxGxY1 roboto-normal-white-15px">
              Pertamina Info
            </div>
            <div className="pengadaan-umum-MxGxY1 roboto-normal-white-15px">
              Pengadaan Umum
            </div>
            <div className="pengumuman-MxGxY1 roboto-normal-white-15px">
              Pengumuman
            </div>
            <div className="e-procurement-MxGxY1 roboto-normal-white-15px">
              E-Procurement
            </div>
          </div>
          <div className="group-102-peWZqm">
            <div className="network-pwYOFv roboto-bold-white-20px">NETWORK</div>
            <div className="anak-perusahaan-pwYOFv roboto-normal-white-15px">
              Anak Perusahaan
            </div>
            <div className="alamat-kantor-pwYOFv roboto-normal-white-15px">
              Alamat Kantor
            </div>
          </div>
          <div className="group-103-peWZqm">
            <div className="contact-xEve1C roboto-bold-white-20px">CONTACT</div>
            <div className="pertamina-xEve1C roboto-bold-white-20px">
              @pertamina
            </div>
            <div className="x135-xEve1C">135</div>
            <div className="address-jl-medan-mer-xEve1C roboto-normal-white-15px">
              Address : Jl. Medan Merdeka Timur 1A, Jakarta 10110
            </div>
            <div className="email-pcc135pertaminacom-xEve1C roboto-normal-white-15px">
              Email : pcc135@pertamina.com
            </div>
          </div>
          <div className="group-111-peWZqm">
            <div className="ellipse-4-UpaUNB"></div>
            <img className="vector-UpaUNB" src={arrowIco3} />
          </div>
          <div className="group-112-peWZqm">
            <div className="ellipse-4-Y0traY"></div>
            <img className="vector-Y0traY" src={arrowIco4} />
          </div>
          <div className="group-113-peWZqm">
            <div className="ellipse-4-1bZPRj"></div>
            <img className="vector-1bZPRj" src={arrowIco5} />
            <img className="vector-AnRaxM" src={arrowIco6} />
            <img className="vector-KO65Io" src={arrowIco7} />
          </div>
          <div className="group-114-peWZqm">
            <div className="ellipse-4-JrzqJe"></div>
            <img className="vector-JrzqJe" src={arrowIco7} />
            <img className="vector-fEHouF" src={arrowIco8} />
            <img className="vector-nrn4rD" src={arrowIco9} />
          </div>
          <div className="group-115-peWZqm">
            <div className="ellipse-4-AxXslX"></div>
            <img className="vector-AxXslX" src={arrowIco7} />
            <img className="vector-3LHg3v" src={arrowIco9} />
            <img className="vector-U4YEfE" src={arrowIco10} />
            <img className="vector-JXhABd" src={arrowIco11} />
            <img className="vector-RMzrBG" src={arrowIco12} />
          </div>
          <div className="rectangle-87-peWZqm"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
