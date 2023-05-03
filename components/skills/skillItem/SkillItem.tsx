import React from 'react';

type Props = {
  skills: Array<{
    title: string,
    icon: string,
    text: string
  }>
}
const SkillItem = ({skills}: Props) => {
  return (
    <>
      {skills?.map(item => (
        <div className="col-md-4" key={item.title}>
          <div className="service-item">
        <span className="icon">
            <i className={`fa fa-${item.icon}`}></i>
        </span>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default SkillItem;
