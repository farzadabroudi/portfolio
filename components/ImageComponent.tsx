import React from "react";
import Image, {ImageProps} from "next/image";

type Props = ImageProps & { locally?: boolean; src: string };
const ImageComponent = (props: Props) => {
   const defaultValues = !props.width &&
      !props.height && {
         // width: "100%",
         // height: "100%",
         layout: "fill",
         // objectFit: "contain",
      };
   return (
      <>
         {props.src && (
            <Image
               {...props}
               {...(defaultValues as ImageProps)}
               alt={props.alt}
               src={
                  props.locally
                     ? `${props.src}`
                     : `${process.env.APP_IMAGE_URL}${
                        props.src && props.src[0] === "/"
                           ? props.src
                           : `/${props.src}`
                     }`
               }
               // loader={({ src, width, quality }) => src}
            />
         )}
      </>
   );
};

export default ImageComponent;
