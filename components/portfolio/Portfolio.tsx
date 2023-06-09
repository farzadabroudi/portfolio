import React from 'react';
import ImageComponent from "@/components/shared/imageComponent/ImageComponent";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio pt-100 pb-70" data-scroll-index="3">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="heading text-center">
              <h6>Portfolio</h6>
              <h2>Work I Have Done</h2>
            </div>
            <div className="portfolio-filter text-center">
              <ul>
                <li className="sel-item" data-filter="*">All</li>
                <li data-filter=".design">Web Design</li>
                <li data-filter=".application">Applications</li>
                <li data-filter=".development">Development</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row portfolio-items">

          <div className="col-lg-4 col-md-6 item application">
            <div className="item-content">
              <ImageComponent locally={true} width={500} height={500} src={'/images/about-img.jpg'}
                              alt={"Farzad ABroudi"}/>
              <div className="item-overlay">
                <h6>Application</h6>
                <div className="icons">
                                    <span className="icon link">
                                        <a href="images/portfolio/img-1.jpg">
                                            <i className="fa fa-search"></i>
                                        </a>
                                    </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 item application">
            <div className="item-content">
              <ImageComponent locally={true} width={500} height={500} src={'/images/about-img.jpg'}
                              alt={"Farzad ABroudi"}/>
              <div className="item-overlay">
                <h6>Application</h6>
                <div className="icons">
                                    <span className="icon link">
                                        <a href="images/portfolio/img-1.jpg">
                                            <i className="fa fa-search"></i>
                                        </a>
                                    </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 item application">
            <div className="item-content">
              <ImageComponent locally={true} width={500} height={500} src={'/images/about-img.jpg'}
                              alt={"Farzad ABroudi"}/>
              <div className="item-overlay">
                <h6>Application</h6>
                <div className="icons">
                                    <span className="icon link">
                                        <a href="images/portfolio/img-1.jpg">
                                            <i className="fa fa-search"></i>
                                        </a>
                                    </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;