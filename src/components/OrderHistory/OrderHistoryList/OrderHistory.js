import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const OrderHistoryContainer = styled.div`
  padding: 0 5vw;
  width: 100%;
  height: calc(100vh - 25.625vw);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: auto;
`;

const HistoryContainer = styled.div`
  margin-top: 3.125vw;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.125vw;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
`;

const Number = styled.div`
  width: 5.125vw;
  height: 5.125vw;
  border-radius: 1.25vw;
  background-color: #ab240f;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.75vw;
  font-weight: 700;
  letter-spacing: -0.06875vw;
  color: #fff;
`;

const Text = styled.div`
  font-weight: 700;
  color: #ab240f;
`;

const Time = styled.div`
  flex: 1;
  font-size: 3.25vw;
  letter-spacing: -0.08125vw;
  text-align: right;
  font-weight: 500;
  color: #ab240f;
`;

const HistoryInformation = styled.div`
  padding: 3.125vw 0 4.375vw;
  box-sizing: border-box;
  border-bottom: 0.125vw solid #ddd;
`;

const OrderNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "notoserif-bold";
  color: #131313;
`;

const OrderOption = styled.div`
  margin-top: 2.375vw;
  display: flex;
  flex-direction: column;
  gap: 1.25vw;
`;

const Title = styled.p``;

const Quantity = styled.p``;

export default function OrderHistory({ history }) {
  const { number, time, name, count } = history;

  return (
    <OrderHistoryContainer>
      <div>
        <HistoryContainer>
          <TitleWrapper>
            <Number>{number}</Number>
            <Text>마지막 주문</Text>
            <Time>{time}</Time>
          </TitleWrapper>

          <div>
            <HistoryInformation>
              <OrderNameWrapper>
                <Title>{name}</Title>
                <Quantity>{count}개</Quantity>
              </OrderNameWrapper>
              <OrderOption />
            </HistoryInformation>
          </div>
        </HistoryContainer>
      </div>
    </OrderHistoryContainer>
  );
}

OrderHistory.propTypes = {
  history: PropTypes.shape({
    number: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
  }),
};
