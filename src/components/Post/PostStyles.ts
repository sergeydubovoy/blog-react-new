import styled from "styled-components";

export const PostWrapper = styled.div`
  padding: 20px;
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  background: #fff;
`;

export const PostTitle = styled.h2`
  max-width: 100%;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  word-wrap: break-word;
`;

export const PostText = styled.p`
  font-size: 16px;
  line-height: 20px;
  word-wrap: break-word;
`;

export const PostDate = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: #304ffe;
`;