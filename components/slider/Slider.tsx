import React, {useEffect, useState} from 'react';
import LinkComponent from "@/components/shared/linkComponent/LinkComponent";

const Slider = () => {
  const [backgroundPosition, setBackgroundPosition] = useState("0% 0px");
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setBackgroundPosition(`0% ${scrollTop}px`);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section id="home" className="banner"
             style={{
               backgroundImage: "url(/images/background/home-banner-bg.jpg)",
               height: "100vh",
               backgroundPosition: backgroundPosition
             }}
    >
      <div className="container">
        <div className="banner-caption">
          <h1>Hi! Im Farzad.</h1>
          <p className="cd-headline clip mt-30">
            <span>FrontEnd React Developer.</span><br/>
          </p>
        </div>
        <div className="arrow bounce">
          <LinkComponent
            scroll={false}
            href={"#about"}
            style={{padding: "2rem 2rem 0"}}
            className={"fa fa-chevron-down fa-2x"}
          />
        </div>
      </div>
    </section>
  );
};

export default Slider;
