import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-xxl">
          <div className="row align-items-center foot_row2 justify-content-between">
            <div className="col-lg-2">
              <div className="footer_logo">
                <h4>Birkeland </h4>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="footer_ingo">
                <p className="text-start m-0">
                  Your Keys, Your coins, Your Node Private, Automated, Optimised
                  for Reliability
                </p>
              </div>
            </div>
          </div>
          <div className="row foot_row1">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="foot_copyright">
                    <p>Copyright &copy;2022. Birkeland Inc.</p>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="footer_icons">

                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-discord"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-telegram"></i>
                </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
