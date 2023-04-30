import React, {AllHTMLAttributes, FC, PropsWithChildren} from 'react';
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

type Props = {} & AllHTMLAttributes<HTMLDivElement>
const layout: FC<PropsWithChildren<Props>> = (props: Props) => {
  return <div className={props.className} style={{height: "100vh"}}>
    <Header/>
    {props.children}
    <Footer/>
  </div>
}


export default layout;