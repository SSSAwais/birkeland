import React from "react";
import "./Teams.css";
import james from "../../assets/images/james.png";
import ruban from '../../assets/images/ruban.png'
const Teams = () => {
  return (
    <section className="Teams">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-4 col-md-12 ">
            <h2 className="title--title">Meet the Team</h2>
            <button className="sssgr--btn ">
              Get in Touch <span>&#x279D;</span>{" "}
            </button>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="sssgr--team--wapper">
              <div className="sssgr--team--item">
                <div className="sssgr--item--img">
                  <img src={james} alt="" className="img-fluid" />
                </div>
                <div className="sssgr--item--content">
                  <h4 className="item--title"> james pierog</h4>
                  <p className="item--sub--title"> Co-Founder & CEO</p>
                  <p className="item--disc">
                  A mathematician and cryptographer by training, James first found Bitcoin in 2012. Since graduating from Yale-NUS with a degree in mathematical, computational, and statistical sciences, he has committed himself to working in the Bitcoin space.
                  </p>
                  <div className="scoial--link">
                    <span className="icon">
                      <i className="fa-brands fa-twitter"></i>
                    </span>
                    <span className="icon">
                      {" "}
                      <i className="fa-brands fa-linkedin-in"></i>
                    </span>
                    <span className="icon">
                      {" "}
                      <i className="fa-brands fa-github"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="sssgr--team--item">
                <div className="sssgr--item--img">
                  <img src={ruban} alt="" className="img-fluid" />
                </div>
                <div className="sssgr--item--content">
                  <h4 className="item--title"> Ruban Sundara Raj</h4>
                  <p className="item--sub--title"> Co-Founder & CTO</p>
                  <p className="item--disc">
                  A software engineer and technologist for many years, Ruban graduated from Nanyang Technological University with a degree in Smart Product Design. Throughout his career, Ruban has worked in designing and engineering secure software and hardware products.
                  </p>
                  <div className="scoial--link">
                    <span className="icon">
                      <i className="fa-brands fa-twitter"></i>
                    </span>
                    <span className="icon">
                      {" "}
                      <i className="fa-brands fa-linkedin-in"></i>
                    </span>
                    <span className="icon">
                      {" "}
                      <i className="fa-brands fa-github"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
