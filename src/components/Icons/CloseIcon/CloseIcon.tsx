import { observer } from "mobx-react";
import styled from "styled-components";

export type TCloseIcon = {
  stroke: string;
  fill: string;
};

const SCloseIcon = styled.svg`
  width: 100%;
  height: 100%;
`;

export const CloseIcon = observer(({ stroke, fill }: TCloseIcon) => {
  return (
    <SCloseIcon
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" stroke={stroke} strokeWidth="1.5" />
      <path
        d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </SCloseIcon>
  );
});
