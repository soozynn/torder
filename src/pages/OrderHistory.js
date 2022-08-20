import React from "react";
import styled from "styled-components";

import Header from "../components/shared/Header";
import OrderHistoryList from "../components/OrderHistory/OrderHistoryList/OrderHistoryList";

const OrderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #fff;
`;

export default function OrderHistory() {
  return (
    <OrderContainer>
      <Header title="주문내역" />
      <OrderHistoryList />
    </OrderContainer>
  );
}
