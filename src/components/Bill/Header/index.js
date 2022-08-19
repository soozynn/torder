import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import imagePrevButtonSrc from "../../../assets/prevButton.svg";

const BillHeaderContainer = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 11.875vw;
  background-color: #fff;
  border-bottom: 0.125vw solid #dfdfdf;
`;

const PrevButton = styled.div`
  position: absolute;
  left: 0;
  padding-left: 3.675vw;
`;

const PrevIcon = styled.img`
  width: 4.89487vw;
  height: 3.35613vw;
`;

const Title = styled.p`
  font-family: "NotoSerifKR-bold";
  font-size: 4.25vw;
  letter-spacing: -0.10625vw;
`;

export default function BillHeader() {
  const navigate = useNavigate();

  const handleClickPrevButton = () => {
    navigate(-1);
  };

  return (
    <BillHeaderContainer>
      <PrevButton onClick={handleClickPrevButton}>
        <PrevIcon src={imagePrevButtonSrc} alt="prev-arrow" />
      </PrevButton>
      <Title>계산서</Title>
    </BillHeaderContainer>
  );
}
