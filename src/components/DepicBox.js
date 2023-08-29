import React from "react";
import styled from "styled-components";

const ServiceBoxItem = styled.div`
  /* width: ${(props) => (props.width > 360 ? 360 : props.width)}px; */
  width: 100vw;
  height: ${(props) => props.height}px;
  background-image: ${(props) => `url(${props.depic})`};
  background-repeat: no-repeat;
  margin: 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function DepicBox({ depic, height, width }) {
  return (
    <>
      <ServiceBoxItem
        width={width}
        height={height}
        depic={depic}
      ></ServiceBoxItem>
    </>
  );
}

export default DepicBox;
