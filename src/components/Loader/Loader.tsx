import styled, { keyframes } from "styled-components";

const loadingKeysApp = keyframes`
  0%,
  80%,
  100% {
    opacity: 0.75;
    box-shadow: 0 0 #304ffe;
    height: 32px;
  }

  40% {
    opacity: 1;
    box-shadow: 0 -8px #304ffe;
    height: 40px;
  }
`;

const StyledLoaderWrapper = styled.div`
  position: relative;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const StyledLoader = styled.div`
  &::before,
  &::after {
    position: absolute;
    top: 0;
    content: "";
  }

  &::before {
    left: -19.992px;
  }

  &::after {
    left: 19.992px;
    -webkit-animation-delay: 0.32s !important;
    animation-delay: 0.32s !important;
  }

  &:before,
  &:after,
  & {
    background: #304ffe;
    -webkit-animation: ${loadingKeysApp} 0.8s infinite ease-in-out;
    animation: ${loadingKeysApp} 0.8s infinite ease-in-out;
    width: 13.6px;
    height: 32px;
    border-radius: 20px;
  }

  text-indent: -9999em;
  margin: auto;
  position: absolute;
  right: calc(50% - 6.8px);
  top: calc(50% - 16px);
  -webkit-animation-delay: 0.16s !important;
  animation-delay: 0.16s !important;
`;

export function Loader() {
  return (
    <StyledLoaderWrapper>
      <StyledLoader></StyledLoader>
    </StyledLoaderWrapper>
  );
}
