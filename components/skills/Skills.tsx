import React from 'react';
import SkillsHeader from "@/components/skills/skillsHeader/SkillsHeader";
import SkillItem from "@/components/skills/skillItem/SkillItem";

const Skills = () => {
  let skills = [
    {
      title: "WEB DESIGN",
      icon: "laptop",
      text: "Lorem Ipsum is simply dummy text of the Lorem has been the industry standard dummy text ever."
    }, {
      title: "Web Development",
      icon: "gears",
      text: "Lorem Ipsum is simply dummy text of the Lorem has been the industry standard dummy text ever."
    }, {
      title: "Responsive Design",
      icon: "mobile",
      text: "Lorem Ipsum is simply dummy text of the Lorem has been the industry standard dummy text ever."
    }, {
      title: "Branding Identity",
      icon: "rocket",
      text: "Lorem Ipsum is simply dummy text of the Lorem has been the industry standard dummy text ever."
    }, {
      title: "Creative Design",
      icon: "pencil",
      text: "Lorem Ipsum is simply dummy text of the Lorem has been the industry standard dummy text ever."
    }, {
      title: "Support",
      icon: "support",
      text: "Lorem Ipsum is simply dummy text of the Lorem has been the industry standard dummy text ever."
    },
  ]
  return (
    <section id="skills" className="services bg-gray pt-100 pb-50">
      <div className="container">

        <SkillsHeader/>

        <div className="row">
          <SkillItem skills={skills}/>
        </div>
      </div>
    </section>
  );
};

export default Skills;