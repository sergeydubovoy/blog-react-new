// import React from "react";
import styled from "styled-components";
import { lightTheme } from "../../styles/theme";

const STitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: 25px;
  line-height: 30px;
  font-weight: 700;
  color: ${lightTheme.textColors.textHeading};
`;

type THeading = {
  text: string;
};

// export const Heading: React.FC<THeading> = (THeading) => (
//   <STitle>{THeading.text}</STitle>
// );
export const Heading = ({ text }: THeading) => <STitle>{text}</STitle>;
