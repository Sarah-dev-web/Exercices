import React from "react";

const CardHeader = ({name, platformLogos}) => {
  return (
  <div className="bg-dark text-white p-3 card-header">
    <p>{name}</p>
    <div className></div>
  </div> 
  );
};

export default CardHeader;
