import React from "react";
import styled from "styled-components";
import TitleImage from "../components/TitleImage";

import ChapterBox from "../components/ChapterBox";

import depic_01 from "../assets/img/depic_01.png";
import depic_02 from "../assets/img/depic_02.png";
import depic_03 from "../assets/img/depic_03.png";
import depic_04 from "../assets/img/depic_04.png";
import depic_05 from "../assets/img/depic_05.png";
import depic_06 from "../assets/img/depic_06.png";
import depic_07 from "../assets/img/depic_07.png";
import depic_08 from "../assets/img/depic_08.png";
import depic_09 from "../assets/img/depic_09.png";
import depic_10 from "../assets/img/depic_10.png";

import DepicBox from "../components/DepicBox";

const HomeContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const HomeBoxContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const HomeBox = styled.div`
  width: 100vw;
  margin: 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "SUIT";
  font-size: 8px;
  font-weight: 200;
`;
const ServiceBox = styled.div`
  width: 100vw;
  margin: 0px 0px;
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const DesBox = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => (props.fontSize ? props.fontSize : 16)}px;
  font-weight: 600;
  color: #343434;
`;

const Home = () => {
  return (
    <HomeContainer>
      <HomeBoxContainer>
        <TitleImage />
        <HomeBox>
          <ServiceBox>
            <DesBox>업무처리도 해야하고 </DesBox>
            <DesBox>예약도 해야하는데 너무 복잡해!</DesBox>
            <DepicBox depic={depic_01} width={359} height={157} />
          </ServiceBox>
          <ServiceBox>
            <DesBox>호텔마스터 하나로 </DesBox>
            <DesBox>한번에 해결완료~!</DesBox>
            <DepicBox depic={depic_02} width={376} height={157} />
          </ServiceBox>
        </HomeBox>
        <ChapterBox
          chapter={"Chapter 1"}
          title={"매출부터 정산까지"}
          des_01={"수익 지출을 한눈에 확인하여 운영 흐름을 확인할 수 있으며"}
          des_02={"세금계산서 또한 '호텔마스터'에서 처리가 가능합니다."}
        />
        <HomeBox>
          <ServiceBox>
            <div>
              <DesBox fontSize={12}>매출조회예시</DesBox>
              <DepicBox depic={depic_03} width={342.8} height={108.13} />
            </div>
            <div style={{ marginTop: 20 }}>
              <DesBox fontSize={12}>지출조회예시</DesBox>
              <DepicBox depic={depic_04} width={342.8} height={108.13} />
            </div>
            <div>
              <DepicBox depic={depic_05} width={375} height={280} />
              <DesBox fontSize={20} style={{ marginBottom: 10 }}>
                세금계산서를 편리하게
              </DesBox>
              <DesBox fontSize={12}>PC와 모바일에서 금액만 입력하면</DesBox>
              <DesBox fontSize={12}>바로 간편하게 발행 완료!</DesBox>
            </div>
          </ServiceBox>
          <ServiceBox>
            <div style={{ marginBottom: 20 }}>
              <DepicBox depic={depic_06} width={375} height={280} />
              <DesBox fontSize={20} style={{ marginBottom: 10 }}>
                정산내역도 한눈에
              </DesBox>
              <DesBox fontSize={12} style={{ marginBottom: 4 }}>
                PC와 모바일에서 금액만 입력하면
              </DesBox>
              <DesBox fontSize={12}>바로 간편하게 발행 완료!</DesBox>
            </div>
          </ServiceBox>
        </HomeBox>
        <ChapterBox
          chapter={"Chapter 2"}
          title={"예약부터 쇼핑까지"}
          des_01={"호텔관리도 하면서 예약까지 한꺼번에 가능하며"}
          des_02={"호텔마스터 스토어를 통해 다양한 쇼핑을 즐길 수 있습니다."}
        />
        <HomeBox>
          <ServiceBox>
            <DepicBox depic={depic_07} width={375} height={282} />
            <DesBox fontSize={20} style={{ marginBottom: 10 }}>
              예약이 가능해요
            </DesBox>
            <DesBox fontSize={12} style={{ marginBottom: 4 }}>
              호텔 객실 예약은 당연히 가능하죠
            </DesBox>
            <DesBox fontSize={12}>한 번에 여행 준비 끝!</DesBox>
          </ServiceBox>
          <ServiceBox>
            <DepicBox depic={depic_08} width={260} height={260} />
            <DesBox fontSize={20} style={{ marginBottom: 10 }}>
              여행 준비 전 쇼핑해 볼까?
            </DesBox>
            <DesBox fontSize={12} style={{ marginBottom: 4 }}>
              스토어에서 다양하게 구매해
            </DesBox>
            <DesBox fontSize={12}>알차게 여행 준비해요!</DesBox>
          </ServiceBox>
          <ServiceBox>
            <DepicBox depic={depic_09} width={375} height={280} />
            <DesBox fontSize={20} style={{ marginBottom: 10 }}>
              주변에 뭐가 더 핫할까?
            </DesBox>
            <DesBox fontSize={12} style={{ marginBottom: 4 }}>
              여행 가기 전에 놀 거리 먹거리 보고
            </DesBox>
            <DesBox fontSize={12}>해택도 알차게 받아가요!</DesBox>
          </ServiceBox>
        </HomeBox>
        <HomeBox>
          <ServiceBox>
            <DepicBox depic={depic_10} width={375} height={332} />
          </ServiceBox>
        </HomeBox>
      </HomeBoxContainer>
    </HomeContainer>
  );
};

export default Home;
