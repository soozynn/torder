import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import imageArrowSrc from "../../../assets/arrow.svg";

const SidebarItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3vw 5vw;
  box-sizing: border-box;
  font-family: "NotoSerifKR-bold";
  font-size: 3.5vw;
  letter-spacing: -0.0875vw;
  border-bottom: 0.125vw solid #ddd;
`;

const ArrowIcon = styled.img`
  width: 1.61275vw;
  height: 2.9755vw;
`;

export default function SidebarItem({ title }) {
  return (
    <SidebarItemContainer>
      <p>{title}</p>
      <ArrowIcon alt="move-icon" src={imageArrowSrc} />
    </SidebarItemContainer>
  );
}

SidebarItem.propTypes = {
  title: PropTypes.string.isRequired,
};
