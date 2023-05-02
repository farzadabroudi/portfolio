import React from 'react';
import LinkComponent from "@/components/shared/linkComponent/LinkComponent";
import MenuItem from "@/components/menu/MenuItem";

const Menu = () => {
  const menuItems = [
    {title: "Home", href: "#home"},
    {title: "About", href: "#about"},
    {title: "Skills", href: "#skills"},
    {title: "Portfolio", href: "#portfolio"},
    {title: "Contact", href: "#contact"}]
  return (
    <>
      <LinkComponent href={"/"} className={"navbar-brand logo"}>
        Abroudi
      </LinkComponent>

      <div className="navbar-collapse collapse">
        <ul className="navbar-nav ml-auto">
          {menuItems?.map(item => (
            <MenuItem title={item.title} href={item.href} key={item.title}/>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;