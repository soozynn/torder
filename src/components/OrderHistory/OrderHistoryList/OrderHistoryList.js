import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import TotalCount from "./TotalCount";
import OrderHistory from "./OrderHistory";

const OrderList = styled.div`
  padding: 0 5vw;
  width: 100%;
  height: calc(100vh - 25.625vw);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: auto;
`;

export default function OrderHistoryList() {
  const orderList = useSelector((state) => state.menu.order);

  return (
    <div>
      <OrderList>
        {orderList.map((history) => (
          <OrderHistory history={history} />
        ))}
      </OrderList>
      <TotalCount count={orderList.length} />
    </div>
  );
}
