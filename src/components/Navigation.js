import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Navigation() {
  return (
    <nav>
      <NavLink to='/'>Play</NavLink>
      <NavLink to='/history'>History</NavLink>
    </nav>
  );
}

const Nav = styled.nav`
  display: flex;
`;

const LinkStyled = styled(NavLink)`
  border: 1px solid black;
  flex: 1;
  display: flex;
  align-items: center;
  justufy-content: center;
  text-decoration: none;
  padding: 10px;
  color: #333;
  background-color: lightgrey;

  &.active {
    background-color: black;
    color: white;
  }
`;
