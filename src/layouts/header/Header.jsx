import React from "react";
import './Header.css';
const Header = () => {
  return (
    <>
      <header>
        <div className="container-xxl">
          <div className="row head_row align-items-center justify-content-between">
            <div className="col-lg-6 col-md-6 col-sm-6 head_section_1">
              <div className="logo_heading">
                <h4>Birkeland </h4>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 head_section_1">
                <div className="early_access text-end" >
                <button>Get Early Access</button>
                </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
