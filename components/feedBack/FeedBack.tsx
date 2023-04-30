import React from 'react';

const FeedBack = () => {
  return (
    <section className="stats pt-100 pb-100" style={{backgroundImage: `url('images / background / stats - bg.jpg')`}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            {/*{!--Stats Item--}*/}
            <div className="single-stat">
                            <span className="stat-icon">
                                <i className="fa fa-users" aria-hidden="true"></i>
                            </span>
              <h2 className="counter" data-count="220">220</h2>
              <p>Happy Clients</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            {/*{!--Stats Item--}*/}
            <div className="single-stat">
                            <span className="stat-icon">
                                <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                            </span>
              <h2 className="counter" data-count="700">700</h2>
              <p>Projects Completed</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            {/*{!--Stats Item--}*/}
            <div className="single-stat">
                            <span className="stat-icon">
                                <i className="fa fa-edit" aria-hidden="true"></i>
                            </span>
              <h2 className="counter" data-count="1100">1100</h2>
              <p>Lines Of Code</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            {/*{!--Stats Item--}*/}
            <div className="single-stat">
                            <span className="stat-icon">
                                <i className="fa fa-trophy" aria-hidden="true"></i>
                            </span>
              <h2 className="counter" data-count="160">160</h2>
              <p>Awards Achieved</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedBack;