import React, {PropsWithChildren} from 'react';
import Link, {LinkProps} from "next/link";

type Props = {
  className?: string
} & LinkProps & PropsWithChildren

const LinkComponent = (props: Props) => {
  return (
    <Link className={props.className} {...props} prefetch={false}>{props.children}</Link>
  );
};

export default LinkComponent;