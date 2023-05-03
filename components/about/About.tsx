import React from 'react';
import ImageComponent from "@/components/shared/imageComponent/ImageComponent";
import Avatar from "@/components/about/avatar/Avatar";
import Socials from "@/components/about/socials/Socials";
import LinkComponent from "@/components/shared/linkComponent/LinkComponent";

const About = () => {
  let about = {
    name: "Farzad Abroudi",
    subtitle: "FrontEnd React Developer",
    about: `I'm Farzad Abroudi Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to specimen book.
           It is a long established fact that a reader will be distracted by the readable content of a page
                when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here, content here', making it look like
                readable English.`,
    socials: [
      {title: "linkedin", link: "https://www.linkedin.com/in/farzad-abroudi/", icon: "linkedin"},
      {title: "github", link: "https://github.com/farzadabroudi", icon: "github"},
      {title: "telegram", link: "", icon: "telegram"},]
  }
  return (
    <section id={"about"} className="about pt-100 pb-100" data-scroll-index="1">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6">
            <Avatar/>
          </div>
          <div className="col-lg-7 col-md-6">
            {/*{!--About Content--}*/}
            <div className="about-content">
              <div className="about-heading">
                <h2>About Me.</h2>
                <span>{about.subtitle}</span>
              </div>
              <p className={"text-justify"}>{about.about}</p>
              {/*{!--About Social Icons--}*/}
              <Socials socials={about.socials}/>

              <span className="about-button">
                <LinkComponent className="main-btn" href="/files/Farzad Abroudi-CV.pdf">Download CV</LinkComponent>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
