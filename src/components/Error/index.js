import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function Error({ text }) {
  return <div>{text}</div>;
}

Error.propTypes = {
  text: PropTypes.string.isRequired,
};
