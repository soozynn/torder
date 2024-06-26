import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import Order from "./Order";

const BillListHistoryContainer = styled.header`
  height: calc(100vh - 38.75vw);
  padding: 0 5vw;
  box-sizing: border-box;
  overflow: auto;
`;

const TotalPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.9375vw 0;
  box-sizing: border-box;
  font-family: "NotoSerifKR-bold";
  font-size: 3.5vw;
  color: #ab240f;
  letter-spacing: -0.175vw;
`;

export default function OrderList({ order }) {
  return (
    <BillListHistoryContainer>
      {order &&
        order.map((menu) =>
          menu.option ? (
            menu.option.map((option) => (
              <Order
                key={uuidv4()}
                name={option.name}
                price={0}
                count={option.count}
              />
            ))
          ) : (
            <Order
              key={uuidv4()}
              name={menu.name}
              price={menu.price}
              count={menu.count}
            />
          )
        )}
      <TotalPriceWrapper>
        <p>총 주문금액</p>
        <p>
          {order
            .reduce(
              (accumulator, object) =>
                accumulator + object.price * (object.count ? object.count : 0),
              0
            )
            .toLocaleString()}
        </p>
      </TotalPriceWrapper>
    </BillListHistoryContainer>
  );
}

OrderList.propTypes = {
  order: PropTypes.arrayOf(
    PropTypes.shape({
      count: PropTypes.number,
      id: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number.isRequired,
      option: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          count: PropTypes.number.isRequired,
        })
      ),
    })
  ).isRequired,
};
