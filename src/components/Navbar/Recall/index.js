import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const RecallContainer = styled.div`
  width: 17vw;
  height: 17vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3.75vw;
  margin-bottom: 7vw;
  box-sizing: border-box;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 50%);
  background-color: #b51900;
  color: #fff;
  text-align: center;
`;

const Icon = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const Title = styled.div`
  fill: #ffffff;
  font-size: 23px;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-weight: 500;
  letter-spacing: -0.05em;
  white-space: inherit;
`;

export default function Recall({ title, src, width, height }) {
  return (
    <RecallContainer>
      <div>
        <Icon alt="icon" src={src} width={width} height={height} />
        <Title>{title}</Title>
      </div>
    </RecallContainer>
  );
}

Recall.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};
