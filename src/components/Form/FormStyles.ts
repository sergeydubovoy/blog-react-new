import styled from "styled-components";

interface SFormProps {
  isModalForm: boolean;
}

export const SForm = styled.form<SFormProps>`
  margin: 0 auto;
  padding: 20px;
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  background: #fff;
`;
