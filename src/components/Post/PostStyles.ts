import styled from "styled-components";

export const SPostWrapper = styled.div`
  padding: 10px;
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid ${(props) => props.theme.borderColors.post};
  border-radius: 10px;
  background: ${(props) => props.theme.backgroundColors.post};

  @media (max-width: 430px) {
    width: 100%;
  }
`;

export const SPostTitle = styled.h2`
  max-width: 100%;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  word-wrap: break-word;
  color: ${(props) => props.theme.textColors.title};
`;

export const SPostText = styled.p`
  font-size: 14px;
  line-height: 18px;
  word-wrap: break-word;
  color: ${(props) => props.theme.textColors.description};
`;

export const SPostDate = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: ${(props) => props.theme.textColors.date};
`;
