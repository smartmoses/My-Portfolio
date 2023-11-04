const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <div className="nav-logo">
            <span className="fs-4 ps-3 text-secondary">My Portfolio</span>
          </div>

          <button
            className="navbar-toggler btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mr-4 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#" >
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Contact Me
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-primary pe-4 ps-4" type="submit">
                Hire me
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
