import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-50 pb-50">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-3 col-sm-6">
            {/*{!--Contant Item--}*/}
            <div className="contact-info">
              <h5>Kalvin</h5>
              <p>lorem Ipsum donor sit.</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            {/*{!--Contant Item--}*/}
            <div className="contact-info">
              <h5>Phone No.</h5>
              <p>(+1) 123 456 7890</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            {/*{!--Contant Item--}*/}
            <div className="contact-info">
              <h5>Email</h5>
              <p>info@example.com</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            {/*{!--Contant Item--}*/}
            <div className="contact-info">
              <h5>Address</h5>
              <p>123 lorem ipsum New York, USA.</p>
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-12">
            <hr/>
            <p className="copy pt-30">
              Kalvin © 2021. All Right Reserved, Designed By Cosmos-Themes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;