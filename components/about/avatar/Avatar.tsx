import React from 'react';
import ImageComponent from "@/components/shared/imageComponent/ImageComponent";

const Avatar = () => {
  return (
    <div className="about-img">
      <ImageComponent locally={true} width={500} height={700} src={'/images/about-img.jpg'} alt={"Farzad Abroudi"}/>
    </div>
  );
};

export default Avatar;
