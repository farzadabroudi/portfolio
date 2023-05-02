import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact pt-100 pb-100" data-scroll-index="5">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <div className="heading">
              <h6>Contact</h6>
              <h2>Get In Touch</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            {/*{!--Contact Form--}*/}
            <form id="contact-form" method="POST"><input type="hidden" name="form-name" value="contactForm"/>
              <div className="row">
                <div className="col-md-6 form-group">
                  {/*{!--name--}*/}
                  <input type="text" className="form-control con-validate" id="contact-name" placeholder="Name"
                         minLength={3}/>
                </div>
                <div className="col-md-6 form-group">
                  {/*{!--email--}*/}
                  <input type="email" className="form-control con-validate" id="contact-email" placeholder="Email"/>
                </div>
                <div className="col-md-12 form-group">
                  {/*{!--message box--}*/}
                  <textarea className="form-control con-validate" id="contact-message"
                            placeholder="How can we help you?" rows={6}/>
                </div>
                <div className="col-md-12 text-center">
                  {/*{!--contact button--}*/}
                  <button id="contact-submit" className="mt-30 main-btn">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;