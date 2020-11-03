import React from "react";

export const HideOrNotHide = () => {
  const [text, setText] = React.useState(0);
  return (
    <div>
    <p> click </p>
      <button onClick={() => setText(text)}> Hide Content</button>)
    </div>
   
  );
  // Code here
};
