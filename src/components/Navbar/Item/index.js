import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ItemContainer = styled.div`
  width: 13.25vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => props.gap || "1.45vw"};

  :hover {
    cursor: pointer;
  }
`;

const IconWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const IconText = styled.p`
  margin-bottom: 3vw;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-size: 2.25vw;
  letter-spacing: -0.1375vw;
`;

export default function Item({ src, title, gap }) {
  return (
    <ItemContainer>
      <IconWrapper>
        <img src={src} alt="navbar-icon" gap={gap} />
      </IconWrapper>
      <IconText>{title}</IconText>
    </ItemContainer>
  );
}

Item.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  gap: PropTypes.string,
};
