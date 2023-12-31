import { observer } from "mobx-react";
import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

export type TDeleteIcon = {
  stroke: string;
};

const SDeleteIcon = styled.svg`
  width: 100%;
  height: 100%;
`;

export const DeleteIcon = observer(({ stroke }: TDeleteIcon) => {
  const theme = useContext(ThemeContext);
  return (
    <SDeleteIcon
      width="30px"
      height="30px"
      viewBox="8 0 8 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 11V17"
        stroke={theme ? theme.backgroundColors.deleteIcon : stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 11V17"
        stroke={theme ? theme.backgroundColors.deleteIcon : stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 7H20"
        stroke={theme ? theme.backgroundColors.deleteIcon : stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
        stroke={theme ? theme.backgroundColors.deleteIcon : stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
        stroke={theme ? theme.backgroundColors.deleteIcon : stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SDeleteIcon>
  );
});
