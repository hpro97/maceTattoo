const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <img className="navbar-brand" src="../../public/maceTattooing.jpg" height="40rem" />
          {/* replace with mace sig ^ */}
          <button
            className="navbar-toggler"
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-3" id="headerLinks">
              <li className="nav-item me-3 fs-3">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item me-3 fs-3">
                <a className="nav-link" href="">
                  contact
                </a>
                {/* change href for pathing to contact route */}
              </li>
              <li className="nav-item me-3 fs-3">
                <a className="nav-link" href="">
                  gallery
                </a>
                {/* change href for pathing to gallery route */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
