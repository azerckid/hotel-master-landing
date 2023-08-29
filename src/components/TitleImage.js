import React from "react";
import styled from "styled-components";

import Image from "../assets/img/titlePic.png";

const TitlePageContainer = styled.div`
  width: 100vw;
  margin-top: -40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: orange;
  z-index: -1;
`;

const TitleImageBox = styled.div`
  width: 100vw;
  height: 270px;
  background-image: url(${Image});
  background-size: cover;
  /* background-size: contain; */
  background-repeat: no-repeat;
  background-color: red;
`;

function TitleImage() {
  return (
    <TitlePageContainer>
      <TitleImageBox></TitleImageBox>
    </TitlePageContainer>
  );
}

export default TitleImage;
