import { observer } from "mobx-react";
import styled from "styled-components";

export type TBackIcon = {
  fill: string;
};

const SBackIcon = styled.svg`
  width: 18px;
  height: 18px;
`;

export const BackIcon = observer(({ fill }: TBackIcon) => {
  return (
    <SBackIcon
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="0 0 42 42"
    >
      <polygon points="31,38.32 13.391,21 31,3.68 28.279,1 8,21.01 28.279,41 " />
    </SBackIcon>
  );
});
