import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #343434; */
  color: #000;
`;
const FooterInfo = styled.div`
  width: 100vw;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const CompanyInfo = styled.div`
  width: 100vw;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
`;
const CompanyInfoItem = styled.div`
  width: 100vw;
  margin-bottom: 4px;
  /* background-color: cyan; */
`;
const Disclaimer = styled.div`
  width: 86vw;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 12px;
  div:nth-child(1) {
    padding: 4px 8px;
    /* border: 1px solid #000;
    border-radius: 4px; */
  }
  div:nth-child(2) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    div:nth-child(1) {
      padding: 4px 8px;
      border: 1px solid #000;
      border-radius: 4px;
      margin-right: 4px;
    }
    div:nth-child(2) {
      padding: 4px 8px;
      border: 1px solid #000;
      border-radius: 4px;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterInfo>
        <Disclaimer>
          <div> 호텔마스터 이용방법 다운로드</div>
          <div>
            <div>PC. Ver</div>
            <div>Mobile. Ver</div>
          </div>
        </Disclaimer>
        <CompanyInfo>
          <CompanyInfoItem>(주) 호텔마스터 </CompanyInfoItem>
          <CompanyInfoItem>대표: 김동현</CompanyInfoItem>
          <CompanyInfoItem>
            사업자등록번호: 000-00-00000 TEL:+82 2135 2776 FAX:+82 505 300 1678
          </CompanyInfoItem>
          <CompanyInfoItem>
            서울특별시 영등포구 63로 40 (라이프빌딩 912호)
          </CompanyInfoItem>
        </CompanyInfo>
      </FooterInfo>
    </FooterContainer>
  );
}

export default Footer;
