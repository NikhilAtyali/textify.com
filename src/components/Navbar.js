import React from "react";

import propTypes from "prop-types";

const Navbar = (props) => {
  const { title, home, about, mode, toggleMode } = props;

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {title}
          </a>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {home}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {about}
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>

              <div
                className={`form-check form-switch text-${
                  mode === "light" ? "Dark" : "light"
                }`}
              >
                <input
                  className="form-check-input"
                  onClick={toggleMode}
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Enable DarkMode{" "}
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
Navbar.propTypes = {
  title: propTypes.string,
};

export default Navbar;
