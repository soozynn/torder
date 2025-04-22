import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

import Header from "@components/shared/Header";

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

export default function Events({ eventList, setTitle }) {
  const navigate = useNavigate();

  const hadleClickEventImage = (eventName) => {
    setTitle(eventName);
    navigate("coupon");
  };

  return (
    <EventsContainer>
      <Header title="이벤트" />
      <EventWrapper>
        {eventList.map((event) => (
          <EventImage
            key={event.name}
            alt="이벤트"
            src={event.imgUrl}
            onClick={() => hadleClickEventImage(event.name)}
          />
        ))}
      </EventWrapper>
    </EventsContainer>
  );
}

Events.propTypes = {
  setTitle: PropTypes.func.isRequired,
  eventList: PropTypes.arrayOf(
    PropTypes.shape({
      imgUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
