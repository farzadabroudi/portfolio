import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand logo" href="index.html">
          Kalvin
        </a>

        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">

            <li className="nav-item">
              <a href="#" className="nav-link active" data-scroll-nav="0">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" data-scroll-nav="1">About</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" data-scroll-nav="2">Services</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" data-scroll-nav="3">Works</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" data-scroll-nav="4">Blog</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" data-scroll-nav="5">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
