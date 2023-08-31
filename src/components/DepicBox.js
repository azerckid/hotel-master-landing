import React from "react";
import styled from "styled-components";

const ServiceBoxContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ServiceBoxItem = styled.div`
  width: ${(props) => props.width}px;
  /* width: 100vw; */
  height: ${(props) => props.height}px;
  background-image: ${(props) => `url(${props.depic})`};
  background-repeat: no-repeat;
  margin: 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: cyan; */
`;

function DepicBox({ depic, height, width }) {
  return (
    <ServiceBoxContainer>
      <ServiceBoxItem
        width={width}
        height={height}
        depic={depic}
      ></ServiceBoxItem>
    </ServiceBoxContainer>
  );
}

export default DepicBox;
