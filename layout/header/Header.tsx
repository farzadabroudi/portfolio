import React, {useEffect, useState} from 'react';
import Menu from "@/components/menu/Menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${isScrolled ? 'fixed' : "scroll"}`}>
      <div className="container">
        <Menu/>
      </div>
    </nav>
  );
};

export default React.memo(Header);
