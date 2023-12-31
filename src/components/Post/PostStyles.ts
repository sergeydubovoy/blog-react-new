import styled from "styled-components";

export const PostWrapper = styled.div`
  padding: 10px;
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  background: ${(props) => props.theme.backgroundColors.post};
`;

export const PostTitle = styled.h2`
  max-width: 100%;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  word-wrap: break-word;
  color: ${(props) => props.theme.textColors.title};
`;

export const PostText = styled.p`
  font-size: 16px;
  line-height: 20px;
  word-wrap: break-word;
  color: ${(props) => props.theme.textColors.description};
`;

export const PostDate = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: ${(props) => props.theme.textColors.date};
`;
