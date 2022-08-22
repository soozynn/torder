import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

import Header from "../components/shared/Header";
import imageCouponSrc from "../assets/coupon.png";
import imageSubscriptionSrc from "../assets/subscription.png";

const EventsContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #fff;
  overflow-y: scroll;
`;

const EventWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  scrollbar-width: none;
  padding-top: 5vw;
`;

const EventImage = styled.img`
  width: 90vw;
  height: 35vw;
  margin-bottom: 2.5vw;
  object-fit: contain;
`;

export default function Events({ setTitle }) {
  const navigate = useNavigate();

  const hadleClickTadaEventImage = (event) => {
    setTitle(event.target.alt);
    navigate("coupon");
  };

  const handleClickTossEventImage = (event) => {
    setTitle(event.target.alt);
    navigate("coupon");
  };

  return (
    <EventsContainer>
      <Header title="이벤트" />
      <EventWrapper>
        <EventImage
          alt="타다 LITE / 20% 쿠폰 / 증정"
          src={imageCouponSrc}
          onClick={(e) => hadleClickTadaEventImage(e)}
        />
        <EventImage
          alt="토스 / 신규가입 하면 만 원 / 즉시 지급!"
          src={imageSubscriptionSrc}
          onClick={(e) => handleClickTossEventImage(e)}
        />
      </EventWrapper>
    </EventsContainer>
  );
}

Events.propTypes = {
  setTitle: PropTypes.func.isRequired,
};
