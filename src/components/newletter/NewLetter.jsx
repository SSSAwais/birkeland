import "./NewLetter.css";
const NewLetter = () => {
  const hanldesubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="sssgr--newLetter">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-7 col-md-10 col-sm-11 12 m-auto text-center">
            <div className="sssgr---wrapper">
              <button className="sssgr--btn"> try it out !</button>
              <h5>Never worry about lightning node maintainance again .</h5>
              <form
                className="sssgr--newletter--form d-flex justify-content-center"
                onSubmit={hanldesubmit}
              >
                <input type="text" placeholder="Enter your Email ..." />
                <button className="sssgr--btn ">
                  {" "}
                  get early access <span>&#x279D;</span>{" "}
                </button>
              </form>
              <p>Sign Up for Early Access</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewLetter;
