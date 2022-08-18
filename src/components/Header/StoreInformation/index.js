import React from "react";
import PropTypes from "prop-types";

import HeaderIcons from "./Icons/index";
import styled from "styled-components";

const StoreInformationContainer = styled.div`
  flex: 1;
  height: 7.99875vw;
  display: flex;
  align-items: center;
  gap: 1.25vw;
  padding: 0 1.25vw;
  box-sizing: border-box;
`;

const Name = styled.p`
  flex: 1;
  font-family: "NotoSerifKR-semibold";
  font-size: 4.875vw;
  color: #fff;
  text-align: center;
  animation: fadein 2s;
  -webkit-animation: fadein 2s;

  @keyframes fadein {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export default function StoreInformation({ store }) {
  const { name } = store;

  return (
    <StoreInformationContainer>
      <HeaderIcons />
      <Name>{name}</Name>
    </StoreInformationContainer>
  );
}

StoreInformation.propTypes = {
  store: PropTypes.shape({
    id: PropTypes.string,
    logoURL: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};
