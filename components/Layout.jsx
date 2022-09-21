import React from "react";
import styled from "styled-components";

import HeaderPage from "./HeaderPage";
import Footer from "./Footer";

const Main = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #e9eef7;
`;

export default function Layout({ children }) {
  return (
    <>
      <Main>
        <HeaderPage />
        {children}
      </Main>
      <Footer />
    </>
  );
}
