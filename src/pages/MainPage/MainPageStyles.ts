import styled from "styled-components";

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
  gap: 15px;
`;

export const PopupBackground = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: 10rem;
  width: 100vw;
  height: 100vh;
  top: 0px;
  bottom: 0px;
  background: ${(props) => props.theme.backgroundColors.popup};
  backdrop-filter: blur(5px) brightness(0.7);
`;
