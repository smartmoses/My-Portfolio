

const Hero = () => {
  return (
    <>
      <div className="container-fluid hero-section col-xxl-8">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-sm-8 col-lg-5">
            <img
              src="./public/images/smartmoses2.jpg" 
              className="d-block img-fluid"
              alt="traveling images"
              loading="lazy"
            />
          </div>
          <div className="col-lg-7 ">
            <h1 className="display-sm-6 mb-3">
              Okoi, God'swill Census
            </h1>
            <p className="lead fs-md-6 fw-3">
              <b>Frontend Developer</b>
            </p>
            <p className="text-secondary">Html | CSS | Javascript | React | Bootstrap | Git</p>
            <form action="">
              <div className="d-md-flex mt-3">

                <div className="input-group mt-2 pe-md-4">
                  <button type="button" className="col-md-4 btn btn-primary">
                    Hire Me
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
