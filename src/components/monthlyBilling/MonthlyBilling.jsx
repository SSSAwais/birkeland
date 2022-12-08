import React, { useState } from "react";
import BillingCards from "../../absComponent/billingCards/BillingCards";
import "./MonthlyBilling.css";
import icons from "../../assets/images/Icon.png";
import check from "../../assets/images/check.png";
const MonthlyBilling = () => {
  const [billData, setBillData] = useState([
    {
      heading: "Lightning Service Provider",
      billing_para:
        "Utilize an enterprise-grade node to earn safe self-custodial yield on your Bitcoin. Perfect for large Bitcoin holders looking for yield.",
      price: "100",
    },
  ]);
  return (
    <>
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 sec_1">
            <div className="bill_wrapper">
              <div className="bill_icon">
                <img src={icons} alt="icon" />
              </div>
              <div className="billing_details">
                <h2>Hobbyist</h2>
                <p>
                  See how easy it is to run a node and interoperate with the
                  lightning network. Perfect for experimentation and using small
                  amounts of Bitcoin.
                </p>
                <h6>$0<span>/mo</span> </h6>
                <button>Select Package</button>
              </div>
              <div className="whats_included">
                <h3>what's included...</h3>
                <div className="includes">
                  <img src={check} alt="check" />
                  <p>Easily and securely operate a node</p>
                </div>
                <div className="includes">
                  <img src={check} alt="check" />
                  <p>Connect to your node via VPN and monitor it from anywhere over clearnet</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 ">
            <div className="bill_wrapper">
              <div className="bill_icon">
                <img src={icons} alt="icon" />
              </div>
              <div className="billing_details">
                <h2>Uncle Jim</h2>
                <p>
                  Connect your community to lightning without the headache of
                  manually managing a node. Perfect for running self-sovereign
                  infrastructure.
                </p>
                <h6>$10<span>/mo</span> </h6>
                <button>Select Package</button>
              </div>
              <div className="whats_included">
                <h3>what's included...</h3>
                <div className="includes">
                  <img src={check} alt="check" />
                  <p>Easily and intuitively automate up to 5 nodes</p>
                </div>
                <div className="includes">
                  <img src={check} alt="check" />
                  <p>Connect to your nodes via VPN and monitor it from anywhere over clearnet</p>
                </div>
                <div className="includes">
                  <img src={check} alt="check" />
                  <p>Monitor data on your node and your peers</p>
                </div>
                <div className="includes">
                  <img src={check} alt="check" />
                  <p>Automatically and securely manage your liquidity and channel balances</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 sec_2">
            <div className="bill_wrapper">
              <div className="bill_icon">
                <img src={icons} alt="icon" />
              </div>
              <div className="billing_details">
                <h2>Lightning Service Provider</h2>
                <p>
                  Utilize an enterprise-grade node to earn safe self-custodial
                  yield on your Bitcoin. Perfect for large Bitcoin holders
                  looking for yield.
                </p>
                <h6>$100<span>/mo</span> </h6>
                <button>Select Package</button>
              </div>
              <div className="whats_included">
                <h3>what's included...</h3>
                <div className="includes">
                  <img src={check} alt="check" />
                  <p>Easily and intuitively automate unlimited nodes </p>
                </div>
                <div className="includes">
                  <img src={check} alt="check" />
                  <p>Connect to your nodes via VPN and monitor it from anywhere over clearnet</p>
                </div>
                <div className="includes">
                  <img src={check} alt="check" />
                  <p>Monitor data on your node and your peers throughout the network</p>
                </div>
                <div className="includes">
                  <img src={check} alt="check" />
                  <p>Automatically and securely manage your liquidity and channel balances</p>
                </div>
                <div className="includes">
                  <img src={check} alt="check" />
                  <p>Automatically and securely reroute liquidity to underserved nodes</p>
                </div>
                <div className="includes">
                  <img src={check} alt="check" />
                  <p>Dynamically adjust fees for optimised yield on your Bitcoin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MonthlyBilling;
