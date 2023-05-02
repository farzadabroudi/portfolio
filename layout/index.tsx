import React, {AllHTMLAttributes, FC, PropsWithChildren} from 'react';
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/layout/header/Header"));
const Footer = dynamic(() => import("@/layout/footer/Footer"));

type Props = {} & AllHTMLAttributes<HTMLDivElement>
const layout: FC<PropsWithChildren<Props>> = (props: Props) => {
  return <div className={props.className} style={{height: "100vh"}}>
    <Header/>
    {props.children}
    <Footer/>
  </div>
}


export default layout;