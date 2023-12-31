import { useEffect, useState } from "react";
import PostStore from "../../store/PostStore";
import { observer } from "mobx-react";
import "../ThemeButton/ThemeButtonStyles.css";

const Switch = observer(() => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(PostStore.theme === "light");
  }, []);

  const handleToggle = () => {
    setChecked(!checked);
    PostStore.themeToggler();
  };

  return (
    <label className="ui-switch">
      <input type="checkbox" checked={checked} onChange={handleToggle}></input>
      <div className="slider">
        <div className="circle"></div>
      </div>
    </label>
  );
});

export default Switch;
