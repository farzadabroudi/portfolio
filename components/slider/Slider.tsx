import React, {useEffect, useState} from 'react';

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
          <h1>Hi! Im Kalvin.</h1>
          <p className="cd-headline clip mt-30">
            <span>Creative Designer &amp; Developer located in New York.</span><br/>
            <span className="blc">Specialized in</span>
          </p>
        </div>
        <div className="arrow bounce">
          <a className="fa fa-chevron-down fa-2x" href="#" data-scroll-nav="1"></a>
        </div>
      </div>
    </section>
  );
};

export default Slider;
