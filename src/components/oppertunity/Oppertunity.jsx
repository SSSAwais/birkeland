import React from "react";
import './Oppertunity.css';
import printer from '../../assets/images/printer.png'
const Oppertunity = () => {
  return (
    <>
      <section className="oppertunity_">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 Oppor_order">
              <div className="opp_detail_section">
                <h2>Capitalize on Opportunities in the Lightning Network</h2>
                <p>
                Birkeland detects liquidity asymmetries and enables your node to automatically reroute you liquidity for maximal impact.
                </p>
                <p>
                Automatically open channels in the undererved areas with the highest opportunity
                </p>
                <p>
                Provide liquidity, route payments, and balance channels all based on policy you decide upon.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="printer__img">
              <img
                src={printer}
                alt="Printer Image"
                className="img-fluid"
              />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Oppertunity;
