import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const MenuImageWrapper = styled.div`
  width: 100%;
  height: 33.125vw;
  background-size: cover;
  background-position: 50%;
  border: 0.125vw solid #e8e8e8;
  border-radius: 1.25vw;
  background-image: ${(props) => `url(${props.url})`};
`;

const NoImageText = styled.p`
  margin-top: 9vh;
  text-align: center;
  font-family: "NotoSerifKR-bold";
  font-size: 3.25vw;
`;

export default function MenuImage({ url }) {
  return (
    <MenuImageWrapper url={url}>
      {url ? "" : <NoImageText>이미지를 준비 중입니다 📷</NoImageText>}
    </MenuImageWrapper>
  );
}

MenuImage.propTypes = {
  url: PropTypes.string,
};
