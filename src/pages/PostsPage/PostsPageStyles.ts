import styled from "styled-components";
import { lightTheme } from "../../styles/theme";

export const Container = styled.div`
  margin: 0 auto;
  padding: 20px 0;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Feed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PopupBackground = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  top: 0px;
  bottom: 0px;
  background: ${lightTheme.backgroundColors.popup};
`;
