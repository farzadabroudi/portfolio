import React from 'react';
import LinkComponent from "@/components/shared/linkComponent/LinkComponent";

type Props = {
  socials: Array<{ title: string, link: string, icon: string }>
}
const Socials = ({socials}: Props) => {
  return (
    <div className="social-icons">

      {socials?.map(item => (
        <LinkComponent key={item.title} href={item.link}><i className={`fa fa-${item.icon}`}></i></LinkComponent>
      ))}

    </div>
  );
};

export default Socials;
