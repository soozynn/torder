import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import logoSrc from "@assets/logo.svg";
import hamburgerSrc from "@assets/hamburger.svg";

const HeaderIconContainer = styled.div`
  display: flex;
  align-items: center;
  width: 17.5vw;
  height: 4.675vw;
  gap: 1.875vw;
`;

const HamburgerIcon = styled.img`
  width: 4.625vw;
  height: 3vw;
`;

const Logo = styled.img`
  width: 10.1713vw;
  height: 4.79587vw;
`;

export default function StoreInformationIcon({ onClick }) {
  return (
    <HeaderIconContainer>
      <div onClick={onClick}>
        <HamburgerIcon alt="hamburger" src={hamburgerSrc} />
      </div>
      <Logo alt="logo" src={logoSrc} />
    </HeaderIconContainer>
  );
}

StoreInformationIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};
