import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const NotificationWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  animation: fadeInOut 4s linear 1 forwards;

  @keyframes fadeInOut {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
`;

const Text = styled.p`
  font-family: "NotoSerifKR-bold";
  font-size: 2vw;
  color: #fff;
  text-align: center;
`;

export default function Notification({ children }) {
  return (
    <NotificationWrapper>
      <Text>{children}</Text>
    </NotificationWrapper>
  );
}

Notification.propTypes = {
  children: PropTypes.string.isRequired,
};
