import React from "react";
import styled from "styled-components";

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

export default function Events() {
  return (
    <EventsContainer>
      <Header title="이벤트" />
      <EventWrapper>
        <EventImage alt="coupon" src={imageCouponSrc} />
        <EventImage alt="subscription" src={imageSubscriptionSrc} />
      </EventWrapper>
    </EventsContainer>
  );
}
