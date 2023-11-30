import { observer } from "mobx-react";
import styled from "styled-components";

const ERROR_MESSAGE: string = "Ошибка загрузки постов. Обновите страницу.";

const ErrorWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #ef665b;
  border-radius: 20px;
  box-shadow: 0px 0px 5px -3px #111;
`;

const ErrorTitle = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #fff;
`;

export const ErrorGetPosts = observer(() => {
  return (
    <ErrorWrapper className="error">
      <ErrorTitle className="error__title">{ERROR_MESSAGE}</ErrorTitle>
    </ErrorWrapper>
  );
});
