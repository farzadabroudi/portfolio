import React, {AllHTMLAttributes, FC, PropsWithChildren} from 'react';
import Header from "@/components/header/Header";

type Props = {} & AllHTMLAttributes<HTMLDivElement>
const layout: FC<PropsWithChildren<Props>> = (props: Props) => {
   return <div className={props.className} style={{height: "100vh"}}>
      <Header/>
      {props.children}
      <div className={"footer"}>footer</div>
   </div>
}


export default layout;