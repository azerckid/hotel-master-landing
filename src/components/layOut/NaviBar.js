import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NaviContainer = styled.div`
  width: 100vw;
  /* height: 40px; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  /* background-color: #343434; */
`;
const NaviBox = styled.div`
  width: 50vw;
  height: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellowgreen;
  border-radius: 20px;
`;
const NaviLink = styled(Link)`
  margin: 0 20px;
  font-size: 9px;
  color: whitesmoke;
  text-decoration: none;
  cursor: pointer;
`;

export const NaviBar = () => {
  return (
    <NaviContainer>
      <NaviBox>
        <NaviLink to={"/"}>Home</NaviLink>
        <NaviLink to={"/product"}>이용약관</NaviLink>
      </NaviBox>
    </NaviContainer>
  );
};
