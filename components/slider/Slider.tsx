import React from 'react';

const Slider = () => {
   return (
      <section id="home" className="banner"
               style={{
                  backgroundImage: "url(/images/background/home-banner-bg.jpg)",
                  height: "100vh",
                  backgroundPosition: "0% 0px"
               }}
               data-stellar-background-ratio=".7" data-scroll-index="0">
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
