import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import StoreInformation from "./StoreInformation/StoreInformation";
import TableNumber from "./TableNumber/index";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 46.5625vh;
  padding: 1.875vw 3.125vw 2.5vw 2.5vw;
  background-image: url(https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/tmp/basicBackImg.jpg);
  background-size: cover;
  background-position: 50%;
  box-sizing: border-box;
  gap: 1.25vw;
`;

export default function Header({ store, table }) {
  return (
    <HeaderContainer>
      <StoreInformation store={store} />
      <TableNumber table={table} />
    </HeaderContainer>
  );
}

Header.propTypes = {
  store: PropTypes.shape({
    id: PropTypes.string,
    logoURL: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  table: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};
