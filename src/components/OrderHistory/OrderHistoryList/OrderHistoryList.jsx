import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import TotalCount from "./TotalCount";
import OrderHistory from "./OrderHistory";

const OrderHistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 25.625vw);
  padding: 0 5vw;
  box-sizing: border-box;
  overflow: auto;
`;

export default function OrderHistoryList() {
  const orderList = useSelector((state) => state.menu.order);

  return (
    <div>
      <OrderHistoryWrapper>
        {[...orderList].reverse().map((history, index) => (
          <OrderHistory
            key={uuidv4()}
            history={history}
            index={index}
            orderLength={orderList.length}
          />
        ))}
      </OrderHistoryWrapper>
      <TotalCount count={orderList.length} />
    </div>
  );
}
