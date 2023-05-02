import React from 'react';
import ImageComponent from "@/components/shared/imageComponent/ImageComponent";

const About = () => {
   return (
      <section id={"about"} className="about pt-100 pb-100" data-scroll-index="1">
         <div className="container">
            <div className="row">
               <div className="col-lg-5 col-md-6">
                  {/*{!--About Image--}*/}
                  <div className="about-img">
                     <ImageComponent locally={true} width={500} height={700} src={'/images/about-img.jpg'} alt={"Farzad ABroudi"}/>
                  </div>
               </div>
               <div className="col-lg-7 col-md-6">
                  {/*{!--About Content--}*/}
                  <div className="about-content">
                     <div className="about-heading">
                        <h2>About Me.</h2>
                        <span>UI/UX Designer &amp; Web Developer</span>
                     </div>
                     <p>I'm <b>Kalvin Doe</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to specimen book.</p>
                     <p>It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using 'Content here, content here', making it look like
                        readable English.</p>
                     {/*{!--About Social Icons--}*/}
                     <div className="social-icons">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-dribbble"></i></a>
                        <a href="#"><i className="fa fa-google-plus"></i></a>
                        <a href="#"><i className="fa fa-pinterest"></i></a>
                     </div>
                     <span className="about-button">
                                <a className="main-btn" href="#">Download CV</a>
                            </span>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;
