import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function Notification({ text }) {
  return <div>{text}</div>;
}

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};
