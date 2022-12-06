import React from "react";
import MonthlyBilling from "../monthlyBilling/MonthlyBilling";
import "./Package.css";
const Pacakge = () => {
  return (
    <>
      <section className="package_">
        <div className="container-xxl">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-sm-12">
              <div className="pacakge_heading">
                <h2>Pick out your Package</h2>
                <p>
                  Empower your node with the security and reliably that the
                  lightning network should deliver.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul
                className="nav nav-pills tabsss justify-content-center"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Monthly Billing
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Yearly Billing
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <MonthlyBilling/>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                 <MonthlyBilling/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pacakge;
