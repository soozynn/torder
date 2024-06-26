import React from "react";
import styled from "styled-components";

const SoldOutWrapper = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0.125vw;
  bottom: 0;
  width: calc(100% - 0.25vw);
  height: 4.75vw;
  background-color: rgba(0, 0, 0, 0.8);
  border-bottom-left-radius: 1.25vw;
  border-bottom-right-radius: 1.25vw;
  font-family: "NotoSerifKR-bold";
  font-size: 2.25vw;
  color: #fff;
`;
export default function SoldOutImage() {
  return <SoldOutWrapper>SOLD OUT</SoldOutWrapper>;
}
