import React, { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const NotificationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 55vw;
  height: 25vh;
  background-color: #b51900;
  border-radius: 15px;
  transform: translate(-50%, -50%);
  z-index: 100;
  animation: ${(props) => props.$isFadeIn && "fadeIn 1s linear 1 forwards"};

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    30% {
      opacity: 1;
    }
  }
`;

const Text = styled.p`
  font-family: "notoserif-bold";
  font-size: 5vw;
  color: #fff;
  text-align: center;
`;

export default function Notification({
  children,
  isOpenNotification,
  setIsOpenNotification,
}) {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsOpenNotification(!isOpenNotification);
    }, 1500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [isOpenNotification, setIsOpenNotification]);

  return (
    <NotificationWrapper $isFadeIn={isOpenNotification}>
      <Text>{children}</Text>
    </NotificationWrapper>
  );
}

Notification.propTypes = {
  children: PropTypes.string.isRequired,
  isOpenNotification: PropTypes.bool.isRequired,
  setIsOpenNotification: PropTypes.func.isRequired,
};
