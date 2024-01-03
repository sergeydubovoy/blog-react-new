// import React from "react";
import styled from "styled-components";

const SCloseButton = styled.button`
  position: absolute;
  padding: 0;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
`;

// export type TCloseButton = {
//   onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
// };

export const CloseButton = () => {
  return <SCloseButton></SCloseButton>;
};
