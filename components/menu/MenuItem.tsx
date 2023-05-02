import React from 'react';
import LinkComponent from "@/components/shared/linkComponent/LinkComponent";

type Props = {
  href: string
  title: string
}
const MenuItem = ({title, href}: Props) => {
  return (
    <li className="nav-item">
      <LinkComponent className={"nav-link"} href={href}>{title}</LinkComponent>
    </li>
  );
};

export default MenuItem;