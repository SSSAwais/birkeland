import React from "react";
import icons from "../../assets/images/Icon.png";
import check from '../../assets/images/check.png'
import './BillingCards.css'
const BillingCards = (props) => {
  const {heading,billing_para,price} = props;
  return (
    <>
      <div className="bill_wrapper">
        <div>
          <img src={icons} alt="icon" />
        </div>
        <div className="billing_details">
          <h2>{heading}</h2>
          <p>{billing_para}</p>
          <h6>${price}/mo</h6>
          <button>Select Package</button>
        </div>
        <div className="whats_included">
            <h3>what's included...</h3>
            <div className="includes">
                <img src={check} alt="check"/>
            </div>
        </div>
      </div>
    </>
  );
};

export default BillingCards;
