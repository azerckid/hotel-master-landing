import React from "react";
import styled from "styled-components";

import Image from "../assets/img/titlePic.png";
import GoogleImage from "../assets/img/btn_google.png";
import AppleImage from "../assets/img/btn_apple.png";

const TitlePageContainer = styled.div`
  width: 100vw;
  margin-top: -33px;
  margin-bottom: 40px;
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
const TitleTextBox = styled.div`
  width: 100vw;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "SUIT";
  font-size: 25px;
  font-weight: 600;
  color: #ffffff;
  z-index: 10;
  div:nth-child(1) {
  }
  div:nth-child(2) {
    margin-top: 6px;
  }
  div:nth-child(3) {
    margin-top: 16px;
    margin-bottom: 18px;
    font-size: 14px;
    font-weight: 400;
  }
`;
const ButtonBox = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;
const StoreButton = styled.div`
  width: 83px;
  height: 28px;
  margin-bottom: 12px;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  z-index: 10;
`;

function TitleImage() {
  return (
    <TitlePageContainer>
      <TitleImageBox>
        <TitleTextBox>
          <div>호텔마스터</div>
          <div>그 편리함의 시작</div>
          <div>관리부터 예약까지 한번에</div>
        </TitleTextBox>
        <ButtonBox>
          <StoreButton image={GoogleImage} />
          <StoreButton image={AppleImage} />
        </ButtonBox>
      </TitleImageBox>
    </TitlePageContainer>
  );
}

export default TitleImage;
