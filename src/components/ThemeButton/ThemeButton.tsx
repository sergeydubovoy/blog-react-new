import { useEffect, useState } from "react";
import PostStore from "../../store/PostStore";
import { observer } from "mobx-react";
import "../ThemeButton/ThemeButtonStyles.css";
import styled from "styled-components";

const SThemeButton = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
`;

export const ThemeButton = observer(() => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(PostStore.theme === "light");
  }, []);

  const handleToggle = () => {
    setChecked(!checked);
    PostStore.themeToggler();
  };

  return (
    <SThemeButton>
      <label className="ui-switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleToggle}
        ></input>
        <div className="slider">
          <div className="circle"></div>
        </div>
      </label>
    </SThemeButton>
  );
});
