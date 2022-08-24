import React from "react";
import styled from "styled-components";

import Header from "../components/shared/Header";
import OrderHistoryList from "../components/OrderHistory/OrderHistoryList/OrderHistoryList";

const OrderContainer = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  z-index: 1;
  overflow: hidden;
`;

export default function OrderHistory() {
  return (
    <OrderContainer>
      <Header title="주문내역" />
      <OrderHistoryList />
    </OrderContainer>
  );
}
