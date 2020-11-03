import React from "react";

export const HideOrNotHide = () => {
  const [hidden, setHidden] = React.useState(true);
  return (
    <div>
      <button 
      onClick={() => {setHidden(!hidden)}}>{hidden ?  "Hide Content" : "Reveal Content" }</button>
      {hidden ? <p> click </p> : null}
    </div>
  );
};
