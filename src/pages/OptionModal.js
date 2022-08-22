import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

import OptionItem from "../components/OptionModal/OptionItem";

const OptionModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const ModalWrapper = styled.header`
  width: 67.5vw;
  height: 90vw;
  background-color: #fff;
  border: 0.25vw solid #444;
  border-radius: 1.25vw;
`;

const ModalTitle = styled.div`
  height: 10.375vw;
  font-family: "NotoSerifKR-bold";
  font-size: 3.75vw;
  border-bottom: 0.125vw solid #dfdfdf;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailOptionWrapper = styled.div`
  padding: 3.75vw;
`;

const MenuTitle = styled.p`
  font-size: 3.5vw;
  font-weight: 500;
`;

const MenuPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.3125vw;
`;

const OptionList = styled.div`
  width: 60vw;
  height: 39.625vw;
  padding: 2.0625vw 0;
  box-sizing: border-box;
  overflow: scroll;
`;

const Bar = styled.div`
  height: 0.125vw;
  width: 60vw;
  background-color: ${(props) => (props.color ? props.color : "dfdfdf")};
  margin: ${(props) => props.color && "2.0625vw 0 2.9375vw;"};
`;

const TotalPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3.125vw;
`;

const PriceText = styled.p`
  font-size: 3vw;
  font-weight: 500;
  letter-spacing: -0.075vw;
`;

const TotalPrice = styled.p`
  font-family: "NotoSerifKR-bold";
  font-size: 3.5vw;
  letter-spacing: -0.075vw;
  color: #ab240f;
`;

const CloseButton = styled.button`
  width: 60vw;
  height: 8.75vw;
  border-radius: 1.875vw;
  background-color: #2f2a26;
  font-size: 3.25vw;
  color: #fff;
  font-weight: 500;
  margin-top: 2.5vw;
`;

export default function OptionModal() {
  const navigate = useNavigate();

  return (
    <OptionModalContainer>
      <ModalWrapper>
        <ModalTitle>옵션보기</ModalTitle>
        <DetailOptionWrapper>
          <MenuTitle>{}</MenuTitle>
          <Bar color="#2f2a26"></Bar>
          <MenuPrice></MenuPrice>
          <Bar></Bar>
          <OptionList>
            {/* {option.map((option) => (
              <OptionItem
                name={option.name}
                count={option.count}
                price={option.price}
              />
            ))} */}
          </OptionList>
          <Bar></Bar>
          <TotalPriceWrapper>
            <PriceText>합계</PriceText>
            <TotalPrice>{}</TotalPrice>
          </TotalPriceWrapper>
          <CloseButton onClick={() => navigate(-1)}>닫기</CloseButton>
        </DetailOptionWrapper>
      </ModalWrapper>
    </OptionModalContainer>
  );
}
