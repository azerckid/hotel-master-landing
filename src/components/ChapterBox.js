import React from "react";
import styled from "styled-components";

const ChapterBoxContainer = styled.div`
  width: 100vw;
  height: 125px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #605bff;
  color: #fff;
  div:nth-child(1) {
    margin-top: 16px;
    font-size: 16px;
  }
  div:nth-child(2) {
    margin-top: 10px;
    font-size: 24px;
  }
  div:nth-child(3) {
    margin-top: 10px;
    font-size: 12px;
  }
  div:nth-child(4) {
    margin-top: 4px;
    font-size: 12px;
  }
`;

function ChapterBox({ chapter, title, des_01, des_02 }) {
  return (
    <ChapterBoxContainer>
      <div>{chapter}</div>
      <div>{title}</div>
      <div>{des_01}</div>
      <div>{des_02}</div>
    </ChapterBoxContainer>
  );
}

export default ChapterBox;
