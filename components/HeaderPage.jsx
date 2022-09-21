import React from "react";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: sticky;
  top: 0;
  z-index: 3;
  background-color: #000;
  width: 100%;
  border-bottom: 1px solid #000;

  a {
    text-decoration: none;
    color: #fff;
    font-weight: 700;
  }
`;

export default function HeaderPage() {
  return (
    <Header>
      <a href="#">Dashboard admin</a>
    </Header>
  );
}
