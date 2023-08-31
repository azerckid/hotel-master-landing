import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import LogoImage from "../../assets/img/logo.png";

const NaviContainer = styled.div`
  width: 100vw;
  margin-top: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NaviBox = styled.div`
  width: 60vw;
  height: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: black;
  background-color: whitesmoke;
  border-radius: 20px;
`;
const NaviLink = styled(Link)`
  margin-left: 8px;
  margin-right: 8px;
  font-size: 9px;
  color: black;
  text-decoration: none;
  cursor: pointer;
  font-family: "SUIT";
  font-size: 8px;
  font-weight: 200;
`;
const LogoBox = styled.div`
  width: 76px;
  height: 20px;
  margin-left: 8px;
  margin-top: 10px;
  background-image: url(${LogoImage});
  background-repeat: no-repeat;
  z-index: 10;
`;

export const NaviBar = () => {
  return (
    <NaviContainer>
      <NaviBox>
        <LogoBox></LogoBox>
        <NaviLink to={"/"}>Home</NaviLink>
        <NaviLink to={"/product"}>이용약관</NaviLink>
      </NaviBox>
    </NaviContainer>
  );
};
