import React from 'react';
import Menu from "@/components/menu/Menu";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Menu/>
      </div>
    </nav>
  );
};

export default React.memo(Header);
