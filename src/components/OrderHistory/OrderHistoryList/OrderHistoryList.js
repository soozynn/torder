import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import TotalCount from "./TotalCount";
import OrderHistory from "./OrderHistory";

const OrderHistoryWrapper = styled.div`
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
  // 동일한 시간대의 값이면 그냥 요소 리스트에 추가해서 그려주기
  // 동일한 시간대의 값이 아니면 그냥 돌려주기
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
