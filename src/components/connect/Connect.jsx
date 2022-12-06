import React from "react";
import "./Connect.css";
import placeholder from "../../assets/images/Placeholder.png";
const Connect = () => {
  return (
    <>
      <section className="connect_">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img
                src={placeholder}
                alt="connect Image"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="connect_detail_section">
                <h2>Connect with the Best</h2>
                <p>Utilize publically available lightning node data to optimise nodes for reliability, liquidity, and connectedness.</p>
                <p>Ensure maximal reliability and connectedness for your node at the click of a button.</p>
                <p>Automatically find the most well-connected nodes based on eigenvector centrality metrics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Connect;
