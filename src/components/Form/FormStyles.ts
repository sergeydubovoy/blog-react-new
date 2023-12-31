import styled from "styled-components";

interface SFormProps {
  isModalForm: boolean;
}

export const SForm = styled.form<SFormProps>`
  margin: 0 auto;
  padding: 10px;
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid ${(props) => props.theme.borderColors.form};
  border-radius: 10px;
  background: ${(props) => props.theme.backgroundColors.form};
`;
