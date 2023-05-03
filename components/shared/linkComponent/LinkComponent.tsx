import React, {PropsWithChildren} from 'react';
import Link, {LinkProps} from "next/link";

type Props = {
  className?: string
  target?: string
  style?: {}
} & LinkProps & PropsWithChildren

const LinkComponent = (props: Props) => {
  return (
    <Link className={props.className} style={props.style} target={props.target} {...props}
          prefetch={false}>{props.children}</Link>
  );
};

export default LinkComponent;