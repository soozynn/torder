import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const MenuContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5vw;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Image = styled.div`
  width: 100%;
  height: 33.125vw;
  background-size: cover;
  background-position: 50%;
  border: 0.125vw solid #e8e8e8;
  border-radius: 1.25vw;
  /* background-image: url(props.image); */
`;

const SoldOut = styled.p`
  position: absolute;
  left: 0.125vw;
  bottom: 0;
  width: calc(100% - 0.25vw);
  height: 4.75vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  border-bottom-left-radius: 1.25vw;
  border-bottom-right-radius: 1.25vw;
  font-family: "NotoSerifKR-bold";
  font-size: 2.25vw;
  color: #fff;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MarkContainer = styled.div`
  display: flex;
  margin: 0.3906vh 0;
  gap: 1.25vw;
  font-size: 2.35vw;
`;

const Name = styled.p`
  font-family: "NotoSerifKR-semibold";
  letter-spacing: -0.06875vw;
  width: 35vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  line-height: 1.25;
  font-size: 2.75vw;
`;

const Price = styled.p`
  margin-top: 0.25vw;
  font-family: "NotoSerifKR-bold";
  font-size: 3.125vw;
`;

const LabelContainer = styled.div`
  margin-top: 1.375vw;
  display: flex;
  align-items: center;
  gap: 0.625vw;
`;

export default function Menu() {
  return (
    <MenuContainer>
      <ImageWrapper>
        <Image></Image>
        {/* {data && <SoldOut></SoldOut>} */}
      </ImageWrapper>

      <Information>
        <MarkContainer>{/* {data && <p></p>} */}</MarkContainer>
        <Name></Name>
        <Price></Price>
        <LabelContainer>
          {/* {data && 각각 4개의 데이터가 존재하면 보여주기  */}
          {/* {data && 각각 4개의 데이터가 존재하면 보여주기  */}
          {/* {data && 각각 4개의 데이터가 존재하면 보여주기  */}
          {/* {data && 각각 4개의 데이터가 존재하면 보여주기  */}
        </LabelContainer>
      </Information>
    </MenuContainer>
  );
}

Menu.propTypes = {};
