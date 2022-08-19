import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const MarkContainer = styled.p`
  height: 1.5625vh;
  line-height: 1.5625vh;
  padding: 0.2344vh 1vw;
  border-radius: 0.625vw;
  background-color: #2f2a26;
  color: #fff;
`;

export default function Mark({ option, description }) {
  return (
    <MarkContainer>
      {option && "옵션"}
      {option && description && "/"}
      {description && "상세설명"}
    </MarkContainer>
  );
}

Mark.propTypes = {
  option: PropTypes.bool,
  description: PropTypes.bool,
};
