import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

type TEditIcon = {
  stroke: string;
};

const SEditIcon = styled.svg`
  width: 100%;
  height: 100%;
`;

export const EditIcon = ({ stroke }: TEditIcon) => {
  const theme = useContext(ThemeContext);
  return (
    <SEditIcon
      width="30px"
      height="30px"
      viewBox="8 0 8 38"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8"
        fill="none"
        stroke={theme ? theme.backgroundColors.editIcon : stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
      <polygon
        fill="none"
        points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8"
        stroke={theme ? theme.backgroundColors.editIcon : stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
    </SEditIcon>
  );
};
