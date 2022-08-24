import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import OptionItem from "../components/OptionModal/OptionItem";
import { useNavigate } from "react-router-dom";

const OptionModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10.375vw;
  border-bottom: 0.125vw solid #dfdfdf;
  font-family: "NotoSerifKR-bold";
  font-size: 3.75vw;
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

const PriceText = styled.p`
  font-size: 2.75vw;
`;

const PriceNumber = styled.p`
  font-size: 3vw;
  font-weight: 700;
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
  margin: ${(props) => props.color && "2.0625vw 0 2.9375vw;"};
  background-color: ${(props) => (props.color ? props.color : "#dfdfdf")};
`;

const TotalPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3.125vw;
`;

const TotalText = styled.p`
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
  margin-top: 2.5vw;
  border-radius: 1.875vw;
  background-color: #2f2a26;
  font-size: 3.25vw;
  color: #fff;
  font-weight: 500;
`;

export default function OptionModal({ selectedOptions }) {
  const navigate = useNavigate();

  return (
    <OptionModalContainer>
      <ModalWrapper>
        <ModalTitle>옵션보기</ModalTitle>
        <DetailOptionWrapper>
          <MenuTitle>{selectedOptions[0].parentTitle}</MenuTitle>
          <Bar color="#2f2a26" />
          <MenuPrice>
            <PriceText>기본가격</PriceText>
            <PriceNumber>
              {selectedOptions[0].parentPrice.toLocaleString()}
            </PriceNumber>
          </MenuPrice>
          <Bar />
          <OptionList>
            {selectedOptions.map((option) => (
              <OptionItem
                key={uuidv4()}
                name={option.name}
                count={option.count}
                price={option.price}
              />
            ))}
          </OptionList>
          <Bar />
          <TotalPriceWrapper>
            <TotalText>합계</TotalText>
            <TotalPrice>
              {(
                selectedOptions[0].parentPrice +
                selectedOptions.reduce(
                  (accumulator, option) =>
                    accumulator + option.price * option.count,
                  0
                )
              ).toLocaleString()}
            </TotalPrice>
          </TotalPriceWrapper>
          <CloseButton onClick={() => navigate("/", { replace: true })}>
            닫기
          </CloseButton>
        </DetailOptionWrapper>
      </ModalWrapper>
    </OptionModalContainer>
  );
}

OptionModal.propTypes = {
  selectedOptions: PropTypes.shape({
    name: PropTypes.string,
    count: PropTypes.number,
    price: PropTypes.number,
  }),
};
