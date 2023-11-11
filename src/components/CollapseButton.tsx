import React from "react";

export const CollapseButton = () => {
  const [isChecked, setChecked] = React.useState(true);
  return (
    <section className={isChecked ? "CollapseButton checked" : "CollapseButton"}>
          <input type="checkbox" onClick={() => setChecked(!isChecked)}/>
          <div className="hamburger"><div></div></div>
    </section>
  );
};
export default CollapseButton;