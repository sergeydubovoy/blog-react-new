import { useState } from "react";
import PostStore from "../../store/PostStore";
import { observer } from "mobx-react";
import "../ThemeButton/ThemeButtonStyles.css";

const Switch = observer(() => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    PostStore.themeToggler();
  };

  return (
    <label className="ui-switch">
      <input type="checkbox" onChange={handleToggle}></input>
      <div className="slider">
        <div className="circle"></div>
      </div>
    </label>
  );
});

export default Switch;
