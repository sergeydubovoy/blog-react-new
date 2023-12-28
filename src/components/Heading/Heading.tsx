import styled from "styled-components";
import { observer } from "mobx-react";

const STitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: 25px;
  line-height: 30px;
  font-weight: 700;
  color: ${(props) => props.theme.textColors.heading};
`;

type THeading = {
  text: string;
};

// export const Heading: React.FC<THeading> = (THeading) => (
//   <STitle>{THeading.text}</STitle>
// );
export const Heading = observer(({ text }: THeading) => (
  <STitle>{text}</STitle>
));
