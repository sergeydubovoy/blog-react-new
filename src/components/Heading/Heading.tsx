import React from "react";
import styled from "styled-components";

const STitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: 25px;
  line-height: 30px;
  font-weight: 700;
  color: #304ffe;
`;

type THeading = {
  text: string;
};

export const Heading: React.FC<THeading> = (THeading) => (
  <STitle>{THeading.text}</STitle>
);
