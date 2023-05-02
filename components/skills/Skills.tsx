import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="services bg-gray pt-100 pb-50" data-scroll-index="2">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="heading text-center">
              <h6>Services</h6>
              <h2>What I Can Do</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            {/*{!--Service Item--}*/}
            <div className="service-item">
                            <span className="icon">
                                <i className="fa fa-laptop"></i>
                            </span>
              <h4>Web Design</h4>
              <p>Lorem Ipsum is simply dummy text of the Lorem has been the industry standard dummy text
                ever.</p>
            </div>
          </div>
          <div className="col-md-4">
            {/*{!--Service Item--}*/}
            <div className="service-item">
                            <span className="icon">
                                <i className="fa fa-gears"></i>
                            </span>
              <h4>Web Development</h4>
              <p>Lorem Ipsum is simply dummy text of the Lorem has been the industry standard dummy text
                ever.</p>
            </div>
          </div>
          <div className="col-md-4">
            {/*{!--Service Item--}*/}
            <div className="service-item">
                            <span className="icon">
                                <i className="fa fa-mobile"></i>
                            </span>
              <h4>Responsive Design</h4>
              <p>Lorem Ipsum is simply dummy text of the Lorem has been the industry standard dummy text
                ever.</p>
            </div>
          </div>
          <div className="col-md-4">
            {/*{!--Service Item--}*/}
            <div className="service-item">
                            <span className="icon">
                                <i className="fa fa-rocket"></i>
                            </span>
              <h4>Branding Identity</h4>
              <p>Lorem Ipsum is simply dummy text of the Lorem has been the industry standard dummy text
                ever.</p>
            </div>
          </div>
          <div className="col-md-4">
            {/*{!--Service Item--}*/}
            <div className="service-item">
                            <span className="icon">
                                <i className="fa fa-pencil"></i>
                            </span>
              <h4>Creative Design</h4>
              <p>Lorem Ipsum is simply dummy text of the Lorem has been the industry standard dummy text
                ever.</p>
            </div>
          </div>
          <div className="col-md-4">
            {/*{!--Service Item--}*/}
            <div className="service-item">
                            <span className="icon">
                                <i className="fa fa-support"></i>
                            </span>
              <h4>Support</h4>
              <p>Lorem Ipsum is simply dummy text of the Lorem has been the industry standard dummy text
                ever.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;