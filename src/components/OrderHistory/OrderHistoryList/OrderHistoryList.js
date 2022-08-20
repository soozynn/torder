import React from "react";
import { useSelector } from "react-redux";

import TotalCount from "./TotalCount";
import OrderHistory from "./OrderHistory";

export default function OrderHistoryList() {
  const orderList = useSelector((state) => state.menu.order);

  return (
    <>
      {orderList.map((history, index) => (
        <OrderHistory
          key={history.id}
          history={history}
          index={index}
          orderLength={orderList.length}
        />
      ))}
      <TotalCount count={orderList.length} />
    </>
  );
}
