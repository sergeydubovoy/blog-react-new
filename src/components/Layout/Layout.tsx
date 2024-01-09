import { Outlet } from "react-router-dom";
import styled from "styled-components";
import "../../index.css";
import { HEADING } from "../../utils/constants";
import { Heading } from "../Heading/Heading";
import { ThemeButton } from "../ThemeButton/ThemeButton";

const SHeader = styled.div`
  position: relative;
  margin: 20px 0;
  height: 30px;
  width: 100vw;
`;

export const Layout = () => {
  return (
    <>
      <SHeader>
        <Heading text={HEADING} />
        <ThemeButton />
      </SHeader>
      <Outlet />
    </>
  );
};
