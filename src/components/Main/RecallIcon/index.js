import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import imageBellSrc from "../../../assets/bell.svg";

const RecallContainer = styled.div`
  width: 17vw;
  height: 17vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3.75vw;
  margin-bottom: ${(props) => (props.position ? "7vw" : "")};
  box-sizing: border-box;
  box-shadow: ${(props) =>
    props.position ? "0 0 10px 0 rgb(0 0 0 / 50%)" : ""};
  background-color: #b51900;
  color: #fff;
  gap: ${(props) => (props.position ? "" : "0.875vw")};
`;

const IconImage = styled.img`
  width: 5.25vw;
  height: 5.3711vw;
`;

const Title = styled.div`
  margin-top: 5px;
  font-size: 2.9vw;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-weight: 500;
  letter-spacing: -0.05em;
  white-space: inherit;
`;

export default function Recall({ position }) {
  return (
    <RecallContainer position={position}>
      <IconImage alt="icon" src={imageBellSrc} />
      <Title>직원호출</Title>
    </RecallContainer>
  );
}

Recall.propTypes = {
  position: PropTypes.string,
};
